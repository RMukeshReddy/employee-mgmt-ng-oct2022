import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  // will intercept all the subsequent request that hit the REST API (post-login)
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request); // original http request

    // ideal is to update http req header with bearer token
    // the token is saved in local storage
    // let's access the token from local storage
    const authToken = localStorage.getItem('authToken');

    // Now, let's manipulate the request haeder with the above authToken as bearer token
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}` // equivalent to 'Bearer' + authToken
      }
    });

    return next.handle(request);
  }
}
