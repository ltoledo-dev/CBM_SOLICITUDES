export class RequestsPerDay {
    date: string;
    totalRequests: number;

    constructor(date: string, totalRequests: number) {
        this.date = date;
        this.totalRequests = totalRequests;
    }
}