import {Component, OnInit} from '@angular/core';
import {AuthService} from 'app/_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {UserService} from '../_services/user.service';
import {SharedService} from '../_services/shared.service';
import {Observable} from 'rxjs/Observable';
import {IUser} from '../_models/user';
import {AlertService} from '../_services/alert.service';

// ...

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: IUser;
  constructor(private _userService: UserService,
              private _authService: AuthService,
              private _sharedService: SharedService,
              private _router: Router,
              private _route: ActivatedRoute,
              private _title: Title,
              private _alertService: AlertService) {
    this.isLoggedIn = this._sharedService.isUserLoggedIn();
  }
ngOnInit() {
  if (this.isLoggedIn) {
    console.log(this.isLoggedIn);
    this.getUser();
    }
  }

  private getUser() {
    return this._userService.getCurrentUser()
      .subscribe(
        user => this.currentUser = user,
        error => this._alertService.error(error)
      );
  }
  logout() {
    this._authService.logout();
  }

  public setTitle(newTitle: string) {
    this._title.setTitle(newTitle);
  }
}
