import {executeStoredProcedure} from "../../../Infrastructure/Config/DataBaseExecute";
import {IReportRepository} from "../../../../Core/Contracts/Reports/IReportRepository";
import {RequestsPerDay} from "../../../../Core/Domain/Report/Models/RequestsPerDay";
import {ClientsWithRequests} from "../../../../Core/Domain/Report/Models/ClientsWithRequests";
import {ClientsWithTotalProducts} from "../../../../Core/Domain/Report/Models/ClientsWithTotalProducts";
import {ProductsWithEntryDates} from "../../../../Core/Domain/Report/Models/ProductsWithEntryDates";
import {RequestsWithStatus} from "../../../../Core/Domain/Report/Models/RequestsWithStatus";

export default class ReportRepository extends IReportRepository {
    async getRequestsPerDay(): Promise<RequestsPerDay[]> {
        const result = await executeStoredProcedure('reporte_solicitudes_dia');
        return result.map(row => new RequestsPerDay(row.date, row.totalRequests));
    }

    async getClientsWithRequests(): Promise<ClientsWithRequests[]> {
        const result = await executeStoredProcedure('reporte_solicitud_cliente');
        return result.map(row => new ClientsWithRequests(row.clientCode, row.clientName, row.totalRequests));
    }

    async getClientsWithTotalProducts(): Promise<ClientsWithTotalProducts[]> {
        const result = await executeStoredProcedure('reporte_ventas_cliente');
        return result.map(row => new ClientsWithTotalProducts(row.clientCode, row.clientName, row.totalProducts));
    }

    async getProductsWithEntryDates(): Promise<ProductsWithEntryDates[]> {
        const result = await executeStoredProcedure('reporte_ingreso_producto');
        return result.map(row => new ProductsWithEntryDates(row.productCode, row.description, row.entryDate));
    }

    async getRequestsWithStatus(): Promise<RequestsWithStatus[]> {
        const result = await executeStoredProcedure('reporte_estado_solicitud');
        return result.map(row => new RequestsWithStatus(row.requestCode, row.statusDescription));
    }
}