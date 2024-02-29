import { Router } from "express";
import { ProductsController } from "../controllers";
import { ProductRepository } from "../repositories";

const router = Router();

const controller = new ProductsController(new ProductRepository());

router.get("/", controller.getAll.bind(controller));
router.post("/", controller.create.bind(controller));


export default router;