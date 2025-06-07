import IRequestRepository from "../../../../Core/Contracts/Request/IRequestRepository";
import { executeStoredProcedure } from "../../../Infrastructure/Config/DataBaseExecute";
import { RequestModel } from "../../../../Core/Domain/Request/Models/RequestModel";
import {RequestHeaderModel} from "../../../../Core/Domain/Request/Models/RequestHeaderModel";
import {RequestDetailModel} from "../../../../Core/Domain/Request/Models/RequestDetailModel";

export default class RequestRepository extends IRequestRepository {
    async getAllRequest() {
        const result = await executeStoredProcedure('solicitud_select_all');

        return result.map(row => new RequestModel({
            idSolicitudEncabezado: row.idSolicitudEncabezado,
            codigoSolicitud: row.codigoSolicitud,
            idEstado: row.idEstado,
            estado: row.estado,
            fechaCreacion: new Date(row.fechaCreacion),
            fechaActualizacion: new Date(row.fechaActualizacion),
            idSolicitudDetalle: row.idSolicitudDetalle,
            idProducto: row.idProducto,
            codigoProducto: row.codigoProducto,
            producto: row.producto,
            cantidad: row.cantidad,
            costoUnitario: row.costoUnitario,
            costoTotal: row.costoTotal
        }));
    }

    async insertHeaderRequest(header: RequestHeaderModel): Promise<number> {
        const result = await executeStoredProcedure('solicitud_encabezado_insert', [
            { name: 'codigo_solicitud', value: header.codigoSolicitud },
            { name: 'id_cliente', value: header.idCliente },
            { name: 'id_estado', value: header.idEstado },
            { name: 'id_usuario', value: header.idUsuario }
        ]);
        return result[0].idSolicitudEncabezado;
    }

    async insertDetailRequest(detalle: RequestDetailModel): Promise<void> {
        await executeStoredProcedure('solicitud_detalle_insert', [
            { name: 'id_solicitud_encabezado', value: detalle.idSolicitudEncabezado },
            { name: 'id_producto', value: detalle.idProducto },
            { name: 'cantidad', value: detalle.cantidad },
            { name: 'costo', value: detalle.costo }
        ]);
    }

    async updateHeaderRequest(header: RequestHeaderModel): Promise<void> {
        await executeStoredProcedure('solicitud_encabezado_update', [
            { name: 'id_solicitud_encabezado', value: header.idSolicitudEncabezado },
            { name: 'codigo_solicitud', value: header.codigoSolicitud },
            { name: 'id_cliente', value: header.idCliente },
            { name: 'id_estado', value: header.idEstado },
            { name: 'id_usuario', value: header.idUsuario }
        ]);
    }

    async updateDetailRequest(detalle: RequestDetailModel): Promise<void> {
        await executeStoredProcedure('solicitud_detalle_update', [
            { name: 'id_solicitud_detalle', value: detalle.idSolicitudDetalle },
            { name: 'id_producto', value: detalle.idProducto },
            { name: 'cantidad', value: detalle.cantidad },
            { name: 'costo', value: detalle.costo }
        ]);
    }

    async deleteRequest(idSolicitud: number): Promise<void> {
        await executeStoredProcedure('solicitud_delete', [
            { name: 'id_solicitud_encabezado', value: idSolicitud }
        ]);
    }
}