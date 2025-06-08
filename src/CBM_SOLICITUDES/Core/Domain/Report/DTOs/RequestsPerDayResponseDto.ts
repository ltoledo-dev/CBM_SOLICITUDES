export class RequestsPerDayResponseDto {
    date: string;
    totalRequests: number;

    constructor(date: string, totalRequests: number) {
        this.date = date;
        this.totalRequests = totalRequests;
    }
}