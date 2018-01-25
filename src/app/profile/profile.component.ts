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
  isLoggedIn: Observable<boolean>;

  private sub: Subscription;

  constructor(private _userService: UserService,
              private _commentService: CommentService,
              private _postService: PostService,
              private _route: ActivatedRoute,
              private _sharedService: SharedService,
              private _alertService: AlertService,
              private  _authService: AuthService) {
    this.isLoggedIn = this._authService.isLoggedIn();
  }

  ngOnInit() {
    if (this.isLoggedIn) {
      this.sub = this._route.params
        .subscribe(params => {
          const id = +params['id'];
          console.log(id);
          this.getUser(id);
        });
   /*    this.getPosts();
       this.getComments();
      this.getUpvotedPosts();*/
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // @TODO
  getPosts(id: number) {
    this._postService.getPostsFromUser(id)
      .map(res => res)
      .subscribe(res => this.posts = res);
  }

  // @TODO
  getUpvotedPosts() {
    const id = 1; // fake id
    this._postService.getUpvotedPosts(id)
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
  getUser(id: number) {
     return this._userService.getUser(id)
       .subscribe(result => this.user = result,
         error => this._alertService.error(error));
  }

}
