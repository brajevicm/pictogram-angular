import { Component, OnDestroy, OnInit } from '@angular/core';
import {CommentService} from '../../_services/comment.service';
import {SharedService} from '../../_services/shared.service';
import {IPost} from '../../_models/post';
import {PostService} from '../../_services/post.service';
import {IComment} from '../../_models/comment';
import {UserService} from '../../_services/user.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import {IUser} from '../../_models/user';
import {AlertService} from '../../_services/alert.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit  {
  currentUser: IUser;
  user: IUser;
  comments: IComment[];
  posts: IPost[];
  model: any = {};
  upvotedPosts: IPost[];
  isLogged: boolean;
  id: number;

  constructor(private _userService: UserService,
              private _commentService: CommentService,
              private _postService: PostService,
              private _route: ActivatedRoute,
              private _sharedService: SharedService,
              private _alertService: AlertService,
              private  _authService: AuthService) {
    this.isLogged = this._sharedService.isUserLoggedIn();
    const path = window.location.pathname;
    this.id = +path.match(/\d+/)[0];
  }

  ngOnInit() {
      this.getUser(this.id);
  }

  getUser(id: number) {
    return this._userService.getUser(id)
      .subscribe(result => this.user = result,
        error => this._alertService.error(error));
  }
  getCurrentUser(id: number) {
    return this._userService.getCurrentUser()
      .subscribe(result => this.currentUser = result,
        error => this._alertService.error(error));
  }

  updateProfile() {
    this._userService.editUser(this.id, this.model.firstName, this.model.lastName, this.model.email, this.model.password).subscribe();
  }
}

