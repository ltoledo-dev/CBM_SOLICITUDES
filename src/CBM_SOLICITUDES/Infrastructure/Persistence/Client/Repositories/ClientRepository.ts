import IClientRepository from '../../../../Core/Contracts/Client/Repositories/IClientRepository';
import { executeStoredProcedure } from '../../../Infrastructure/Config/DataBaseExecute';
import { ClientModel } from '../../../../Core/Domain/Client/Models/ClientModel';

export default class ClientRepository extends IClientRepository {
    async getAllClients() {
        const result = await executeStoredProcedure('cliente_select_all');

        return result.map(row => new ClientModel({
            idCliente: row.idCliente,
            codigoCliente: row.codigoCliente,
            nombreCliente: row.nombreCliente,
        }));
    }

    async createClient(clientModel: ClientModel) {
        const parameters = [
            { name: 'codigo_cliente', value: clientModel.codigoCliente },
            { name: 'nombre_cliente', value: clientModel.nombreCliente },
        ];

        await executeStoredProcedure('cliente_insert', parameters);
    }

    async getClientByCode(code: string): Promise<boolean> {
        const parameters = [
            { name: 'codigo_cliente', value: code },
        ];

        const result = await executeStoredProcedure('cliente_select_by_code', parameters);

        return result[0]?.exists === 1;
    }

}