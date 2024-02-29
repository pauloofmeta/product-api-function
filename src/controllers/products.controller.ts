import { Request, Response } from "express";
import { IProductRepository } from "../repositories";

export class ProductsController {
    
    private _repository: IProductRepository;
    
    constructor(repository: IProductRepository) { 
        this._repository = repository;
    }

    public async create(req: Request, res: Response) {
        const product = req.body;

        if (!product) { 
            res.status(400).json({ message: "Product is required" });
            return;
        }

        if (!product.name) {
            res.status(400).json({ message: "Product name is required" });
            return;
        }

        const newProduct = await this._repository.create(product);
        res.status(201).json(newProduct);
    }

    public async getAll(_req: Request, res: Response) {
        const products = await this._repository.getAll();
        res.status(200).json(products);
    }
}