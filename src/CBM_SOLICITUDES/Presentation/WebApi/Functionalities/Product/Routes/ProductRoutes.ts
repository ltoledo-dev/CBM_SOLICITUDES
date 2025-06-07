import express from "express";
import * as ProductController from "../Controllers/ProductController";
import { authenticateJWT } from '../../../Middleware/AuthenticationMiddleware';

const router = express.Router();

router.use(authenticateJWT);
router.get("/productos", ProductController.getAllProduct);
router.post("/productos", ProductController.createProduct);

export default router;