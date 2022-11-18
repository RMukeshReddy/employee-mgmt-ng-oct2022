import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuth } from '../models/iauth';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  constructor(private http: HttpClient, 
    private navigationHelper: NavigationHelper,
    private toastr: ToastrService ) {}

  createNewUser(formData: IAuth) {
    console.log(formData);
    return this.http.post(environment.signupRestApi, formData).pipe(
      map((res: any) => {
        // sending the response to the component
        return res;
      }),
      catchError((error) => {
        // returning the error to the component
        return throwError(error);
      })
    );
  }

  loginRequest(formData: IAuth) {
    console.log(formData);
    return this.http.post(environment.loginRestApi, formData).pipe(
      map((res: any) => {
        // sending the response to the component
        return res;
      }),
      catchError((error) => {
        // returning the error to the component
        return throwError(error);
      })
    );
  }

  isAuth(): boolean {
    if(localStorage.getItem('authToken')) {
      return true;
    }
    else {
      return false;
    }
  }

  handleLogout() {
    // removing the token from local storage
    localStorage.removeItem('authToken');
    this.navigationHelper.navigateTo('/auth/login');
    this.toastr.success('Logout Successful');
  }
}
