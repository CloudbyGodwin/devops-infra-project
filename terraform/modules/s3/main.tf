resource "aws_s3_bucket" "static_site" {
  bucket = "${var.project_prefix}-lydia-daycare-site"

  tags = {
    Name        = "${var.project_prefix}-lydia-daycare-site"
    Environment = "dev"
  }
}

# Make the bucket publicly accessible
resource "aws_s3_bucket_ownership_controls" "ownership" {
  bucket = aws_s3_bucket.static_site.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.static_site.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "policy" {
  bucket = aws_s3_bucket.static_site.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.static_site.arn}/*"
      }
    ]
  })
}

# Enable static website hosting
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.static_site.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}



# Upload all files in "build" folder to S3
resource "aws_s3_object" "website_files" {
  for_each = fileset("${path.root}/app/lydias-daycare/build", "**")

  bucket       = aws_s3_bucket.static_site.id
  key          = each.value
  source       = "${path.root}/app/lydias-daycare/build/${each.value}"
  etag         = filemd5("${path.root}/app/lydias-daycare/build/${each.value}")
  content_type = lookup(
    {
      html = "text/html"
      css  = "text/css"
      js   = "application/javascript"
      png  = "image/png"
      jpg  = "image/jpeg"
      jpeg = "image/jpeg"
      gif  = "image/gif"
      svg  = "image/svg+xml"
      json = "application/json"
      ico  = "image/x-icon"
    },
    regex("[^.]+$", each.value),
    "application/octet-stream"
  )
}





