import { IReportRepository } from "../../../Contracts/Reports/IReportRepository";

export const getRequestsPerDay = async (reportRepository: IReportRepository) => {
    return await reportRepository.getRequestsPerDay();
};

export const getClientsWithRequests = async (reportRepository: IReportRepository) => {
    return await reportRepository.getClientsWithRequests();
};

export const getClientsWithTotalProducts = async (reportRepository: IReportRepository) => {
    return await reportRepository.getClientsWithTotalProducts();
};

export const getProductsWithEntryDates = async (reportRepository: IReportRepository) => {
    return await reportRepository.getProductsWithEntryDates();
};

export const getRequestsWithStatus = async (reportRepository: IReportRepository) => {
    return await reportRepository.getRequestsWithStatus();
};