import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import {SharedService} from '../_services/shared.service';

/**
 * Created by brajevicm on 8/06/17.
 */

@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(private _router: Router,
              private _sharedService: SharedService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._sharedService.isUserLoggedIn()) {
      this._router.navigate(['/hot']);
      return false;
    }

    return true;
  }
}
