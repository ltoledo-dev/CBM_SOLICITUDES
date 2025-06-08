import { ProductResponseDTO } from "../../../Domain/Products/DTOs/ProductResponseDto";
import { ProductModel } from "../../../Domain/Products/Models/ProductModel";

export const mapProductModelsToProductResponseDTOs = (products: ProductModel[]): ProductResponseDTO[] => {
    return products.map(products => new ProductResponseDTO({
        idProducto: products.idProducto,
        codigoProducto: products.codigoProducto,
        descripcion: products.descripcion,
        costo: products.costo,
    }));
};

export const mapProductCreateDtoToProductModel = (product: { codigoProducto: string; descripcion: string; costo: number; }): ProductModel => {
    return new ProductModel({
        idProducto: 0,
        codigoProducto: product.codigoProducto,
        descripcion: product.descripcion,
        costo: product.costo,
    });
};