import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { CommentService } from '../_services/comment.service';
import { PostService } from '../_services/post.service';
import { IComment } from '../_models/comment';
import { IPost } from '../_models/post';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/alert.service';
import { AuthService } from '../_services/auth.service';
import {IUser, User} from '../_models/user';
import { SharedService } from '../_services/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  user: IUser;
  comments: IComment[];
  posts: IPost[];
  upvotedPosts: IPost[];
  isLoggedIn: boolean;
  isCurrentUser: boolean;

  private sub: Subscription;

  constructor(private _userService: UserService,
              private _commentService: CommentService,
              private _postService: PostService,
              private _route: ActivatedRoute,
              private _sharedService: SharedService,
              private _alertService: AlertService,
              private  _authService: AuthService) {
    this.isLoggedIn = this._sharedService.isUserLoggedIn();
  }

  ngOnInit() {
      this.sub = this._route.params
        .subscribe(params => {
          const id = +params['userid'];
          this.getUser(id);
          if (this.isLoggedIn) {
            this.getCurrentUser();
          }
        });
    }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // @TODO pass proper id
  getComments(id: number) {
    this._commentService.getCommentsFromUser(id)
      .subscribe(
        comments => this.comments = comments,
        error => this._alertService.error(error)
      )
    ;
  }

  private getCurrentUser() {
    return this._userService.getCurrentUser()
      .subscribe(
        user => this.currentUser = user,
        error => this._alertService.error(error)
      );
  }

  // @TODO pass proper id
  getUser(id: number) {
    return this._userService.getUser(id)
      .subscribe(result => this.user = result,
        error => this._alertService.error(error));
  }


}

