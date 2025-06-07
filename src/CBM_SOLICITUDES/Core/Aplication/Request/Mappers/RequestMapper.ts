import { RequestModel } from "../../../Domain/Request/Models/RequestModel";
import { RequestResponseDTO } from "../../../Domain/Request/DTOs/RequestResponseDto";
import { RequestDetailDto } from "../../../Domain/Request/DTOs/RequestDetailDto";
import { RequestHeaderModel } from "../../../Domain/Request/Models/RequestHeaderModel";
import { RequestDetailModel } from "../../../Domain/Request/Models/RequestDetailModel";
import { RequestCreateDto } from "../../../Domain/Request/DTOs/RequestCreateDto";
import { RequestUpdateDto } from "../../../Domain/Request/DTOs/RequestUpdateDto";

export function mapRequestModelToRequestResponseDTO(models: RequestModel[]): RequestResponseDTO[] {
    const grouped = new Map<number, RequestResponseDTO>();

    models.forEach(model => {
        const detalle = new RequestDetailDto({
            idSolicitudDetalle: model.idSolicitudDetalle,
            idProducto: model.idProducto,
            codigoProducto: model.codigoProducto,
            producto: model.producto,
            cantidad: model.cantidad,
            costoUnitario: model.costoUnitario,
            costoTotal: model.costoTotal
        });

        if (!grouped.has(model.idSolicitudEncabezado)) {
            grouped.set(model.idSolicitudEncabezado, new RequestResponseDTO({
                idSolicitudEncabezado: model.idSolicitudEncabezado,
                codigoSolicitud: model.codigoSolicitud,
                idEstado: model.idEstado,
                estado: model.estado,
                fechaCreacion: model.fechaCreacion,
                fechaActualizacion: model.fechaActualizacion,
                detalles: [detalle]
            }));
        } else {
            grouped.get(model.idSolicitudEncabezado)!.detalles.push(detalle);
        }
    });

    return Array.from(grouped.values());
}

export const mapCreateRequestDTOToModels = (dto: RequestCreateDto) => {
    const header = new RequestHeaderModel({
        idSolicitudEncabezado: 0,
        codigoSolicitud: dto.codigoSolicitud,
        fechaCreacion: dto.fechaCreacion,
        idCliente: dto.idCliente,
        idEstado: dto.idEstado,
        fechaActualizacion: dto.fechaActualizacion,
        idUsuario: dto.idUsuario
    });

    const detalles = dto.detalles.map(d => new RequestDetailModel({
        idSolicitudDetalle: 0,
        idSolicitudEncabezado: 0,
        idProducto: d.idProducto,
        cantidad: d.cantidad,
        costo: d.costo
    }));

    return { header, detalles };
};

export const mapUpdateRequestDTOToModels = (dto: RequestUpdateDto) => {
    const header = new RequestHeaderModel({
        idSolicitudEncabezado: dto.idSolicitudEncabezado,
        codigoSolicitud: dto.codigoSolicitud,
        fechaCreacion: dto.fechaCreacion,
        idCliente: dto.idCliente,
        idEstado: dto.idEstado,
        fechaActualizacion: dto.fechaActualizacion,
        idUsuario: dto.idUsuario
    });

    const detalles = dto.detalles.map(d => new RequestDetailModel({
        idSolicitudDetalle: d.idSolicitudDetalle,
        idSolicitudEncabezado: dto.idSolicitudEncabezado,
        idProducto: d.idProducto,
        cantidad: d.cantidad,
        costo: d.costo
    }));

    return { header, detalles };
};
