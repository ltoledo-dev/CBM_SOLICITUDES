import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getToken();

    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
