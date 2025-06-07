import IRequestRepository from "../../../Contracts/Request/IRequestRepository";
import { mapRequestModelToRequestResponseDTO } from "../Mappers/RequestMapper";

export const getAllRequests = async (requestRepository : IRequestRepository) => {
    const request = await requestRepository.getAllRequest();
    return mapRequestModelToRequestResponseDTO(request);
}