import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {environment} from "../../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(usuario: string, clave: string): Observable<any> {
    const body = { usuario, clave };
    return this.http.post(`${this.apiUrl}/v1/login`, body, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('Authorization');
        if (token) {
          localStorage.setItem('authToken', token);
        }
      })
    );
  }
}
