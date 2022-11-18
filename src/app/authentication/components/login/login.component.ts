import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private navigationHelper: NavigationHelper,
    private bnIdle: BnNgIdleService) { }

  ngOnInit(): void {}

  handleLogin(formData: NgForm) {
    // sending the form data value to the method in service
    this.authService.loginRequest(formData.value).subscribe(
      (res: any) => {
        // receiving the response from the service
        console.log(res);
        if (res && res.token) {
          // let's save the token in cookies/local storage/ session storage
          localStorage.setItem('authToken', res.token); 
          this.toastr.success('Login Successful');
          // post login redirect to the appropriate URL
          const redirectTo = this.activatedRoute.snapshot.queryParams['redirectTo'];
          this.navigationHelper.navigateTo(redirectTo);
        }
        // setting the timeout after login if idle
        const idleSubscription = this.bnIdle.startWatching(300).subscribe(() => {
          if(localStorage.getItem('authToken')) {
            localStorage.removeItem('authToken');
            this.navigationHelper.navigateTo('/auth/login');
            this.toastr.info('Time-out, please login again.');
          }
          // unsubscribing after logout
          idleSubscription.unsubscribe();
        })
      },
      // fetching the error if any
      (error: any) => {
        this.toastr.error('Error Occured! Please try after sometime.');
        console.log(error.message);
      }
    );
  }
}
