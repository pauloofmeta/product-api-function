import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: Number,
    description: String,
    category: String,
    stock: Number,
    image: String,
}, {
    timestamps: true,
    versionKey: false,
});

const Product = model('Products', productSchema);
export default Product;