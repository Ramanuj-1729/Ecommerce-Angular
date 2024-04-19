import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      // withCredentials: true,  // Include credentials in the request

      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenService.getToken() || ''
      }
    });

    return next.handle(modifiedRequest);
  }
}
