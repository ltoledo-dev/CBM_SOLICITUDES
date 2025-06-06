import { Request, Response } from 'express';
import * as GetAllProduct from '../../../../../Core/Aplication/Product/UseCases/GetAllProducts';
import * as CreateProduct from '../../../../../Core/Aplication/Product/UseCases/CreateProduct';
import ProductRepository from '../../../../../Infrastructure/Persistence/Product/Repositories/ProductRepository';

export const getAllProduct = async (req: Request, res: Response) => {
    try {
        const productRepository = new ProductRepository();
        const productDto = await GetAllProduct.getAllProducts(productRepository);
        res.status(200).json(productDto);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener los productos', error: error.message });
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const productDto = { ...req.body };
        const productRepository = new ProductRepository();
        await CreateProduct.createProduct(productRepository, productDto);
        res.status(204).json();
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al crear el producto', error: error.message });
    }
};