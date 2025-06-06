import { HttpError } from "../../../Domain/Exceptions/HttpError";
import ProductRepository from "../../../../Infrastructure/Persistence/Product/Repositories/ProductRepository";

export const validateProductByCode = async (code: string) => {
    const productRepository = new ProductRepository();
    const productExists: boolean = await productRepository.getProductByCode(code);

    if (productExists) {
        throw new HttpError('El producto con el código proporcionado ya existe', 409);
    }
};