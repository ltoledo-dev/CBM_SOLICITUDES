import { ClientModel } from '../../../Domain/Client/Models/ClientModel';

export default class IClientRepository {
    async getAllClients(): Promise<ClientModel[]> {
        throw new Error('Método no implementado');
    }

    async createClient(cliente: ClientModel): Promise<void> {
        throw new Error('Método no implementado');
    }

    async getClientByCode(code: string): Promise<boolean> {
        throw new Error('Método no implementado');
    }
}