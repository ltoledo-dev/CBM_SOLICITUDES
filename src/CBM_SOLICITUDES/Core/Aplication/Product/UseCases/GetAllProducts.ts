import IProductRepository from "../../../Contracts/Products/Repositories/IProductRepository";
import { mapProductModelsToProductResponseDTOs } from "../Mappers/ProductMapper";

export const getAllProducts = async (productRepository: IProductRepository) => {
    const products = await productRepository.getAllProducts();
    return mapProductModelsToProductResponseDTOs(products);
};