import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environment/environment';
import {Observable} from 'rxjs';
import {Cliente} from '../Models/ClientModel';
import {ClientCreateDto} from '../Dtos/ClientCreateDto';
import {ClientGetDto} from '../Dtos/ClientGetDto';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.get<ClientGetDto[]>(`${this.apiUrl}/v1/clientes`).pipe(
      map((dtos) =>
        dtos.map(dto => ({
          idCliente: dto.idCliente,
          codigoCliente: dto.codigoCliente,
          nombreCliente: dto.nombreCliente
        }))
      )
    );
  }

  crearCliente(cliente: ClientCreateDto): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/v1/clientes`, cliente);
  }
}
