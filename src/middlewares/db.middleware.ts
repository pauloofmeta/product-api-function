import { Request, Response, NextFunction } from "express";

import { connectMongoDB } from "../config";

const connectDb = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        await connectMongoDB();
        next();
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        res.status(500).json({ message: "Error connecting to MongoDB" });
    }
};

export default connectDb;