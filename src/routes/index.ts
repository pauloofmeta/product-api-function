import { Router } from "express";

import produtctRoutes from "./products.routes";

const router = Router();

router.use('/products', produtctRoutes);

export default router;