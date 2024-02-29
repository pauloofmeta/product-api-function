import { Product } from "../entities";
import { ProductCreateModel, ProductModel } from "../models";

export interface IProductRepository {
    create(product: ProductCreateModel): Promise<ProductModel>;
    getAll(): Promise<ProductModel[]>;
}

export class ProductRepository implements IProductRepository {

    async create(product: ProductCreateModel): Promise<ProductModel> {
        const newProduct = new Product(product);
        await newProduct.save();
        return newProduct as ProductModel;
    }

    async getAll(): Promise<ProductModel[]> {
        return await Product.find({});
    }
}