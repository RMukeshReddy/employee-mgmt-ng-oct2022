import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from 'src/app/shared/utils/password-strength-validator';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  // step 1: Have the form tag equivalent in TS
  signupForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private navigationHelper: NavigationHelper ) { }

  ngOnInit(): void {
    // step 1 continues
    this.signupForm = new FormGroup({
      // step 2: Have the input tags equivalent in TS & step 3 is in html
      email: new FormControl('', [ // step 5: let's work on validation & for step 6 -> refer html
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        passwordStrengthValidator() // importing function from custom validators
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        passwordStrengthValidator()
      ])
    });
  }

  handleSignup() {
    // sending the form data value to the method in service
    this.authService.createNewUser(this.signupForm.value).subscribe(
      (res: any) => {
        // receiving the response from the service
        console.log(res);
        if (res && res.id) {
          this.toastr.success('User Registered Successfully');
          // Reseting the form
          this.signupForm.reset();
          // navigating to login page
          this.navigationHelper.navigateTo('/auth/login');  
        }
      },
      // fetching the error if any
      (error: any) => {
        this.toastr.error('Error Occured! Registration Unsuccessful');
        console.log(error.message);
      }
    );
  }
}
