import { RequestModel } from "../../Domain/Request/Models/RequestModel";
import {RequestHeaderModel} from "../../Domain/Request/Models/RequestHeaderModel";
import {RequestDetailModel} from "../../Domain/Request/Models/RequestDetailModel";

export default class IRequestRepository  {
    async getAllRequest(): Promise<RequestModel[]> {
        throw new Error('Método no implementado');
    }

    async insertHeaderRequest(header: RequestHeaderModel): Promise<number> {
        throw new Error('Método no implementado');
    }

    async insertDetailRequest(detalle: RequestDetailModel): Promise<void> {
        throw new Error('Método no implementado');
    }

    async updateHeaderRequest(header: RequestHeaderModel): Promise<void> {
        throw new Error('Método no implementado');
    }

    async updateDetailRequest(detalle: RequestDetailModel): Promise<void> {
        throw new Error('Método no implementado');
    }

    async deleteRequest(idSolicitud: number): Promise<void> {
        throw new Error('Método no implementado');
    }
}