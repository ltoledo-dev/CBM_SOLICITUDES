import {RequestsPerDay} from "../../Domain/Report/Models/RequestsPerDay";
import {ClientsWithRequests} from "../../Domain/Report/Models/ClientsWithRequests";
import {ClientsWithTotalProducts} from "../../Domain/Report/Models/ClientsWithTotalProducts";
import {ProductsWithEntryDates} from "../../Domain/Report/Models/ProductsWithEntryDates";
import {RequestsWithStatus} from "../../Domain/Report/Models/RequestsWithStatus";


export class IReportRepository {

    async getRequestsPerDay(): Promise<RequestsPerDay[]> {
        throw new Error('Method not implemented');
    }

    async getClientsWithRequests(): Promise<ClientsWithRequests[]> {
        throw new Error('Method not implemented');
    }

    async getClientsWithTotalProducts(): Promise<ClientsWithTotalProducts[]> {
        throw new Error('Method not implemented');
    }

    async getProductsWithEntryDates(): Promise<ProductsWithEntryDates[]> {
        throw new Error('Method not implemented');
    }

    async getRequestsWithStatus(): Promise<RequestsWithStatus[]> {
        throw new Error('Method not implemented');
    }
}
