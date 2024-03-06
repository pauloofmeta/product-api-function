variable "project_id" {
  type    = string
  default = "<product_id>"
}

variable "region" {
  type    = string
  default = "<location>"
}

variable "service_account_email" {
  type    = string
  default = "<service_account>"
  
}

variable "mongo_url" {
  type    = string
  default = "mongodb://<YOUR-MONGO-IP>:27017"
}