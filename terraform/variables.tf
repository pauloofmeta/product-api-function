variable "project_id" {
  type    = string
  default = "product-api-415813"
}

variable "region" {
  type    = string
  default = "us-east1"
}

variable "service_account_email" {
  type    = string
  default = "cloud-functions@product-api-415813.iam.gserviceaccount.com"
  
}

variable "mongo_url" {
  type    = string
  default = "mongodb://<YOUR-MONGO-IP>:27017"
}