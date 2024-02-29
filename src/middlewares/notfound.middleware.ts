import { Request, Response, NextFunction } from "express";

const notFound = async (_req: Request, res: Response, _next: NextFunction) => {
    const error = new Error("Not found");
    res.status(404).json({ message: error.message });
};

export default notFound;