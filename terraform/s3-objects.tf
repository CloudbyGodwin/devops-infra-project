resource "aws_s3_object" "react_app" {
  for_each = fileset("${path.root}/app/lydias-daycare/build", "**")

  bucket       = "devops-lydia-daycare-site" # directly using bucket name
  key          = each.value
  source       = "${path.root}/app/lydias-daycare/build/${each.value}"
  etag         = filemd5("${path.root}/app/lydias-daycare/build/${each.value}")
  content_type = lookup(
    {
      html = "text/html",
      css  = "text/css",
      js   = "application/javascript",
      png  = "image/png",
      jpg  = "image/jpeg",
      jpeg = "image/jpeg",
      gif  = "image/gif",
      svg  = "image/svg+xml",
      json = "application/json",
      ico  = "image/x-icon"
    },
    regex("[^.]+$", each.value),
    "application/octet-stream"
  )
}
