export interface ProductModel {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export interface ProductCreateModel {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}