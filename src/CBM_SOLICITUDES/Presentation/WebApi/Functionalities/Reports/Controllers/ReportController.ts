import { Request, Response } from 'express';
import * as ReportUseCase from '../../../../../Core/Aplication/Report/UseCases/ReportUseCase';
import ReportRepository from '../../../../../Infrastructure/Persistence/Reports/Repositories/ReportRepository';

export const getRequestsPerDay = async (req: Request, res: Response) => {
    try {
        const reportRepository = new ReportRepository();
        const data = await ReportUseCase.getRequestsPerDay(reportRepository);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener solicitudes por día', error: error.message });
    }
};

export const getClientsWithRequests = async (req: Request, res: Response) => {
    try {
        const reportRepository = new ReportRepository();
        const data = await ReportUseCase.getClientsWithRequests(reportRepository);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener clientes con solicitudes', error: error.message });
    }
};

export const getClientsWithTotalProducts = async (req: Request, res: Response) => {
    try {
        const reportRepository = new ReportRepository();
        const data = await ReportUseCase.getClientsWithTotalProducts(reportRepository);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener clientes con total de productos', error: error.message });
    }
};

export const getProductsWithEntryDates = async (req: Request, res: Response) => {
    try {
        const reportRepository = new ReportRepository();
        const data = await ReportUseCase.getProductsWithEntryDates(reportRepository);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener productos con fechas de ingreso', error: error.message });
    }
};

export const getRequestsWithStatus = async (req: Request, res: Response) => {
    try {
        const reportRepository = new ReportRepository();
        const data = await ReportUseCase.getRequestsWithStatus(reportRepository);
        res.status(200).json(data);
    } catch (error: any) {
        res.status(error.status || 500).json({ message: 'Error al obtener solicitudes con estado', error: error.message });
    }
};