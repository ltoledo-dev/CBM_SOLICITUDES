import express from "express";
import * as ProductController from "../Controllers/ProductController";

const router = express.Router();

router.get("/productos", ProductController.getAllProduct);
router.post("/productos", ProductController.createProduct);

export default router;