terraform {
  backend "gcs" {
    bucket = "gcp-cloud-function-bucket-product-api-415813"
    prefix = "function"
  }
}