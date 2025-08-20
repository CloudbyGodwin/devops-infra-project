variable "project_prefix" {
  type        = string
  description = "Prefix for naming resources"
}

# For correct Content-Type headers
variable "mime_types" {
  type = map(string)
  default = {
    ".html" = "text/html"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
  }
}
