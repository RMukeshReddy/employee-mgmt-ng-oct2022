import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let route: any= { snapshot: {}};
  let state: any= { snapshot: {}, url: '/about'};;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [ 
        AuthService,
        ToastrService,
        { provide: Router, useValue: routerSpy } 
      ]
    });
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  // negative spec - testing whether the authenticated user is redirected to login page or not
  it('should redirect the unauthenticated user to the login page', () => {
    expect(guard.canActivate(route, state)).toEqual(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['auth', 'login'], { queryParams: { redirectTo: state.url }});
  });

  // positive spec - testing whether the authenticated user is redirected to appropriate page after login
  it('should redirect the authenticated user to the appropriate page', () => {
    spyOn(authService, 'isAuth').and.returnValue(true);
    expect(guard.canActivate(route, state)).toEqual(true);
  });
});
