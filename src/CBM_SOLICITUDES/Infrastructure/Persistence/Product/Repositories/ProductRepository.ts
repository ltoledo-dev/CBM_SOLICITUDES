import IProductRepository from "../../../../Core/Contracts/Products/Repositories/IProductRepository";
import { executeStoredProcedure } from "../../../Infrastructure/Config/DataBaseExecute";
import { ProductModel } from "../../../../Core/Domain/Products/Models/ProductModel";

export default class ProductRepository extends IProductRepository {
    async getAllProducts() {
        const result = await executeStoredProcedure('producto_select_all');

        return result.map(row => new ProductModel({
            idProducto: row.idProducto,
            codigoProducto: row.codigoProducto,
            descripcion: row.descripcion,
            costo: row.costo,
        }));
    }

    async createProduct(productModel: ProductModel) {
        const parameters = [
            { name: 'codigo_producto', value: productModel.codigoProducto },
            { name: 'descripcion', value: productModel.descripcion },
            { name: 'costo', value: productModel.costo },
        ];

        await executeStoredProcedure('producto_insert', parameters);
    }

    async getProductByCode(code: string): Promise<boolean> {
        const parameters = [
            { name: 'codigo_producto', value: code },
        ];

        const result = await executeStoredProcedure('producto_select_by_code', parameters);

        return result[0]?.exists === 1;
    }
}