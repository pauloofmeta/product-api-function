import express from "express";
import routes from "../routes";
import { useCors, useDb, useNotFound } from "../middlewares";

const api = express();

api.use(express.json());
api.use(useCors);
api.use(useDb);

api.use('/api/v1', routes);

/** Not found handling */
api.use(useNotFound);

export default api;