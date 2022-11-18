import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /*
    check whether the user is authenticated or not
    if yes
      return true
    else
      redirect to login page
      return false
    */
    if (this.authService.isAuth()) {
      // we need to redirect the user to the requested page - do this in login.component.ts
      return true;
    } else {
      this.router.navigate(['auth', 'login'], {
        queryParams: { redirectTo: state.url }
      });
      return false;
    }
  }
}
