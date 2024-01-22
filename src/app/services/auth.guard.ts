import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private login: LoginService) {}

  // eslint-disable-next-line @typescript-eslint/naming-convention, no-underscore-dangle, id-denylist, id-match
  public canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): boolean {
    const requiresLogin = _next.data['requiresLogin'] === false ? false : true;

    if (this.getUserState(_next) === requiresLogin) return true;

    if (requiresLogin) this.router.navigate(['/login']);
    if (!requiresLogin) this.router.navigate(['/dashboard']);

    return false;
  }

  private getUserState(next_url: ActivatedRouteSnapshot): boolean {
    let userState = false;

    if (
      next_url.routeConfig?.path === 'admin' &&
      this.login.getUserAccType() === 'admin'
    ) {
      userState = true;
    } else if (
      next_url.routeConfig?.path !== 'admin' &&
      (this.login.getUserAccType() === 'user' ||
        this.login.getUserAccType() === 'admin')
    ) {
      userState = true;
    } else userState = false;

    return userState;
  }
}
