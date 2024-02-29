import { http } from "@google-cloud/functions-framework";
import { api } from "./functions";

http('product-api', api);