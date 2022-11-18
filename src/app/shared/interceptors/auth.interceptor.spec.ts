import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {

  let authInterceptor: AuthInterceptor;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AuthInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    }),
    authInterceptor = TestBed.inject(AuthInterceptor);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authInterceptor).toBeTruthy();
  });

  // testing whether the request has authorization header or not
  it('should set the authorization header when a request is made using http client', () => {
    // Expect that a single request has been made which matches the given URL, and return its mock.
    httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe();
    let req = httpTestingController.expectOne(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log('auth interceptor', req);
    expect(req.request.headers.get('authorization')).toBeDefined();
  });
});
