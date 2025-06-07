import { Request, Response } from "express";
import * as GetAllRequest from "../../../../../Core/Aplication/Request/UseCases/GetAllRequest";
import RequestRepository from "../../../../../Infrastructure/Persistence/Request/Repositories/RequestRepository";
import { CreateRequest } from "../../../../../Core/Aplication/Request/UseCases/CreateRequest";
import { UpdateRequest } from "../../../../../Core/Aplication/Request/UseCases/UpdateRequest";
import { DeleteRequest } from "../../../../../Core/Aplication/Request/UseCases/DeleteRequest";

export const getAllRequest = async(req: Request, res: Response) => {
    try {
        const requestRepository = new RequestRepository();
        const requestResponseDTOS = await GetAllRequest.getAllRequests(requestRepository);
        res.status(200).json(requestResponseDTOS);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener los listados de solicitudes', error: error.message });
    }
}

export const createRequest = async (req: Request, res: Response) => {
    try {
        const requestRepository = new RequestRepository();
        const useCase = new CreateRequest(requestRepository);
        await useCase.execute(req.body);
        res.status(201).json();
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al crear la solicitud', error: error.message });
    }
};

export const updateRequest = async (req: Request, res: Response) => {
    try {
        const requestRepository = new RequestRepository();
        const useCase = new UpdateRequest(requestRepository);
        await useCase.execute(req.body);
        res.status(204).json();
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al actualizar la solicitud', error: error.message });
    }
};

export const deleteRequest = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const requestRepository = new RequestRepository();
        const useCase = new DeleteRequest(requestRepository);
        await useCase.deleteRequests(id);
        res.status(204).json();
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al eliminar la solicitud', error: error.message });
    }
};