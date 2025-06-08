export class ProductsWithEntryDatesResponseDto {
    productCode: string;
    description: string;
    entryDate: string;

    constructor(productCode: string, description: string, entryDate: string) {
        this.productCode = productCode;
        this.description = description;
        this.entryDate = entryDate;
    }
}