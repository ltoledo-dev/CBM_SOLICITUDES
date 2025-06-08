export class RequestsWithStatus {
    requestCode: string;
    statusDescription: string;

    constructor(requestCode: string, statusDescription: string) {
        this.requestCode = requestCode;
        this.statusDescription = statusDescription;
    }
}