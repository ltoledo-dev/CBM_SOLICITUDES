import { ProductModel } from "../../../Domain/Products/Models/ProductModel";

export default class IProductRepository {
    async getAllProducts(): Promise<ProductModel[]> {
        throw new Error('Método no implementado');
    }

    async createProduct(product: ProductModel): Promise<void> {
        throw new Error('Método no implementado');
    }

    async getProductByCode(code: string): Promise<boolean> {
        throw new Error('Método no implementado');
    }
}