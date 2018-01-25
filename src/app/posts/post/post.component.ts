import { Component, OnDestroy, OnInit } from '@angular/core';
import { IPost } from '../../_models/post';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../_services/post.service';
import { AlertService } from '../../_services/alert.service';
import { CommentService } from '../../_services/comment.service';
import { IComment } from '../../_models/comment';
import { Title } from '@angular/platform-browser';
import { IUser } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { SharedService } from '../../_services/shared.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'page',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {
  currentUser: IUser;
  isLoggedIn: Observable<boolean>;
  post: IPost;
  comments: IComment[] = [];
  upvoted = false;
  commentText: string;
  loading = false;
  offset = 0;
  postID: number;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _userService: UserService,
              private _router: Router,
              private _commentService: CommentService,
              private _sharedService: SharedService,
              private _postService: PostService,
              private _alertService: AlertService,
              private _authService: AuthService,
              private _title: Title) {
    this.isLoggedIn = this._authService.isLoggedIn();
  }

  ngOnInit() {
    if (this.isLoggedIn) {
      this.getUser();
    }
    this.sub = this._route.params
      .subscribe(params => {
        const id = +params['id'];
        console.log(id);
        this.postID = id;
        this.getPost(id);
        this.getComments(id, this.offset);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clearText() {
    this.commentText = null;
  }
  onScrollDown() {
    this.offset += 1;
    this.getComments(this.postID, this.offset);
  }

  // @TODO fix backend
  private getUser() {
    const id = 1; // fake
    return this._userService.getUser(id)
      .subscribe(
        user => this.currentUser = user,
        error => this._alertService.error(error)
      );
  }

  getPost(id: number) {
    this._postService.getPost(id)
      .subscribe(
        post => this.post = post,
        error => this._alertService.error(error),
      );

  }
  private getComments(id: number, offset: number) {
    this._commentService.getPostComments(id, offset)
      .subscribe(content => {
        content.map(c => {
          return {
            id: c.id,
            description: c.description,
            createdDate: c.createdDate,
            enabled: c.enabled,
            upvotedCommentByCurrentUser: c.upvotedCommentByCurrentUser,
            reportedCommentByCurrentUser: c.reportedCommentByCurrentUser,
            username: c.username,
            upvotesCount: c.upvotesCount,
            reportsCount: c.reportsCount,
            userProfileImage: c.userProfileImage,
            userId: c.userId

          };
        }).forEach(item => this.comments.push(item));
      });
  }
  addComment(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._commentService.addComment(post_id, this.commentText);
    this.loading = true;
  }

  upvotePost(post_id: any) {
    post_id = parseFloat(post_id.toString());
    this._postService.upvotePost(post_id);
  }

  upvoteComment(comment_id: any) {
    comment_id = parseFloat(comment_id.toString());
    this._commentService.upvoteComment(comment_id);
  }

  removePost(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._postService.removePost(post_id);
  }

  reportPost(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._postService.reportPost(post_id);
  }

  removeComment(comment_id: number) {
    comment_id = parseFloat(comment_id.toString());
    this._commentService.removeComment(comment_id);
  }

  reportComment(comment_id: number) {
    comment_id = parseFloat(comment_id.toString());
    this._commentService.reportComment(comment_id);
  }

  public setTitle(newTitle: string) {
    return this._title.setTitle(newTitle);
  }

}
