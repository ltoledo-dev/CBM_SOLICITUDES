import { Injectable } from '@angular/core';
import {environment} from "../../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Product} from "../Models/ProductModel";
import {ProductGetDto} from "../Dtos/ProductGetDto";
import {ProductCreateDto} from "../Dtos/ProductCreateDto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  obtenerProducto(): Observable<Product[]> {
    return this.http.get<ProductGetDto[]>(`${this.apiUrl}/v1/productos`).pipe(
      map((dtos) =>
        dtos.map(dto => ({
          idProducto: dto.idProducto,
          codigoProducto: dto.codigoProducto,
          descripcion: dto.descripcion,
          costo: dto.costo
        }))
      )
    );
  }

  crearProduct(product: ProductCreateDto): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/v1/productos`, product);
  }
}
