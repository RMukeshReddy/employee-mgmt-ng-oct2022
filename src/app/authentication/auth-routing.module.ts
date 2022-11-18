import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const authRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    data: { animation: 'signupPage', title: 'Employee Management | Signup' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'loginPage', title: 'Employee Management | Login' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
