import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AlertService} from '../_services/alert.service';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private _router: Router,
              private _alertService: AlertService) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      this._alertService.error('Invalid user id.');
      this._router.navigate(['']);
      return false;
    }
    return true;
  }
}
