import IProductRepository from "../../../Contracts/Products/Repositories/IProductRepository";
import { ProductCreateDTO} from "../../../Domain/Products/DTOs/ProductCreateDto";
import { mapProductCreateDtoToProductModel } from "../Mappers/ProductMapper";
import * as productValidator from "../Validators/ProductValidator";

export const createProduct = async (productRepository: IProductRepository, productCreateDto: ProductCreateDTO) => {

    // Validamos que el producto no exista
    await productValidator.validateProductByCode(productCreateDto.codigoProducto);

    // Insertamos en la base de datos si no existe el producto
    const productCreate = mapProductCreateDtoToProductModel(productCreateDto);
    await productRepository.createProduct(productCreate);
};