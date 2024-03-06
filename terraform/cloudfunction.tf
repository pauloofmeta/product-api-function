data "archive_file" "source" {
  type        = "zip"
  source_dir  = "../"
  output_path = "${path.module}/function.zip"
  excludes = [ ".git/*", ".gitignore", "terraform/*", "src/*", "*.lock", "*tsconfig.json" ]
}

resource "google_storage_bucket_object" "zip" {
  source       = data.archive_file.source.output_path
  content_type = "application/zip"
  name         = "buid-${data.archive_file.source.output_md5}.zip"
  bucket       = google_storage_bucket.Cloud_function_bucket.name
  depends_on = [
    google_storage_bucket.Cloud_function_bucket,
    data.archive_file.source
  ]
}

resource "google_cloudfunctions2_function" "Cloud_Function" {
  name        = "product-api"
  description = "Function to get product details"
  location    = var.region
  project     = var.project_id
  build_config {
    runtime     = "nodejs20"
    entry_point = "product-api"
    source {
      storage_source {
        bucket = google_storage_bucket.Cloud_function_bucket.name
        object = google_storage_bucket_object.zip.name
      }
    }
  }
  service_config {
    service_account_email = "${var.service_account_email}"
    environment_variables = {
      DB_MONGOURL = "${var.mongo_url}"
    }
  }
  depends_on = [
    google_storage_bucket.Cloud_function_bucket,
    google_storage_bucket_object.zip
  ]
}

resource "google_cloud_run_service_iam_member" "Cloud_Function_Member" {
  location = google_cloudfunctions2_function.Cloud_Function.location
  service  = google_cloudfunctions2_function.Cloud_Function.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

output "Cloud_Function_URL" {
  value = google_cloudfunctions2_function.Cloud_Function.service_config[0].uri
}