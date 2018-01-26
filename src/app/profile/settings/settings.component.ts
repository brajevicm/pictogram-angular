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
export class SettingsComponent  { currentUser: IUser;
  user: IUser;
  comments: IComment[];
  posts: IPost[];
  upvotedPosts: IPost[];
  isLogged: boolean;

  constructor(private _userService: UserService,
              private _commentService: CommentService,
              private _postService: PostService,
              private _route: ActivatedRoute,
              private _sharedService: SharedService,
              private _alertService: AlertService,
              private  _authService: AuthService) {
    this.isLogged = this._sharedService.isUserLoggedIn();
  }

  ngOnInit() {
    if (this.isLogged) {
      this.getUser();

         //  this.getPosts();
         //  this.getComments();
         // this.getUpvotedPosts();
    }
  }

  ngOnDestroy() {
  }

  EditAcc() {
 alert('button is working');
  }

  // @TODO
  getPosts() {
    const id = 1; // fake id
    this._postService.getPostsFromUser(id, 1)
      .map(res => res)
      .subscribe(res => this.posts = res);
  }

  // @TODO
  getUpvotedPosts() {
    const id = 1; // fake id
    this._postService.getUpvotedPosts(id, 0)
      .subscribe(
        posts => this.upvotedPosts = posts,
        error => this._alertService.error(error)
      )
    ;
  }

  // @TODO pass proper id
  getComments() {
    const id = 1; // fake id
    this._commentService.getCommentsFromUser(id)
      .subscribe(
        comments => this.comments = comments,
        error => this._alertService.error(error)
      )
    ;
  }

  // @TODO pass proper id
  getUser() {
    const id = 1; // fake id
    return this._userService.getUser(id)
      .subscribe(result => this.user = result,
        error => this._alertService.error(error));
  }

}
