import {Component, OnInit} from '@angular/core';
import {PostService} from '../_services/post.service';
import {IPost, Post} from '../_models/post';
import {IUser} from '../_models/user';
import {CommentService} from '../_services/comment.service';
import {AlertService} from '../_services/alert.service';
import {UserService} from '../_services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../_services/shared.service';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../_services/auth.service';
import {PostsRoutingModule} from './posts-routing.module';

@Component({
  selector: 'pages',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  topCommented: IPost[] = [];
  currentUser: IUser;
  isLoggedIn: boolean;
  loading = false;
  commentText: string;
  offset = 0;

  constructor(private _postService: PostService,
              private _userService: UserService,
              private _commentService: CommentService,
              private _alertService: AlertService,
              private _authService: AuthService,
              private _sharedService: SharedService
  ) {
    this.isLoggedIn = this._sharedService.isUserLoggedIn();
  }

  // TODO srediti prikaz lajkovanih postova
  ngOnInit() {
    this.load(this.offset);
    this.isLoggedIn = this._sharedService.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.getUser();
    }
  }
  load(offset: number) {
    const path = window.location.pathname;
    if (path === '/hot') {
      this.loadHotPosts(offset);
    } else if (path === '/trending') {
      this.loadTrendingPosts(offset);
    } else if (path === '/fresh') {
      this.loadFreshPosts(offset);
    } else if (path.endsWith('/posts')) {
      const id = +path.match(/\d+/)[0];
      this.getPostsFromUser(id, offset);
    } else if (path.endsWith('/upvotes')) {
      const id = +path.match(/\d+/)[0];
      this.getUpvotedPosts(id, offset);
    } else if (path.endsWith('/comments')) {
      const id = +path.match(/\d+/)[0];
      this.getPostsFromUser(id, offset);
    } else {
      this.loadHotPosts(offset);
    }
  }
  onScrollDown() {
    this.offset += 1;
    this.load(this.offset);
  }


  onScrollUp() {
    this.offset -= 1;
    this.load(this.offset);
  }

  private initHotPosts() {
    this._postService.getHotPosts(this.offset)
      .subscribe(posts => {
        this.posts = posts;
      })
    ;
  }
  private getUser() {
    return this._userService.getCurrentUser()
      .subscribe(
        user => this.currentUser = user,
        error => this._alertService.error(error)
      );
  }
  getUpvotedPosts(id: number, offset: number) {
    this._postService.getUpvotedPosts(id, offset).subscribe(posts => {
      posts.map(p => {
        return {
          id: p.id,
          title:  p.title,
          description: p.description,
          postImage:   p.postImage,
          createdDate: p.createdDate,
          enabled:   p.enabled,
          upvotedPostByCurrentUser:  p.upvotedPostByCurrentUser,
          reportedPostByCurrentUser:  p.reportedPostByCurrentUser,
          username:   p.username,
          userId: p.userId,
          userProfileImage: p.userProfileImage,
          commentsCount: p.commentsCount,
          upvotesCount:   p.upvotesCount,
          reportsCount: p.reportsCount,
          isActiveComment: false,
          isActivePost: false,
          isActiveReport: false

        };
      }).forEach(item => this.posts.push(item));
    });
  }

    getPostsFromUser(id: number, offset: number) {
    this._postService.getPostsFromUser(id, offset)
      .subscribe(posts => {
        posts.map(p => {
          return {
            id: p.id,
            title:  p.title,
            description: p.description,
            postImage:   p.postImage,
            createdDate: p.createdDate,
            enabled:   p.enabled,
            upvotedPostByCurrentUser:  p.upvotedPostByCurrentUser,
            reportedPostByCurrentUser:  p.reportedPostByCurrentUser,
            username:   p.username,
            userId: p.userId,
            userProfileImage: p.userProfileImage,
            commentsCount: p.commentsCount,
            upvotesCount:   p.upvotesCount,
            reportsCount: p.reportsCount,
            isActiveComment: false,
            isActivePost: false,
            isActiveReport: false

          };
        }).forEach(item => this.posts.push(item));
      });
  }

  private loadHotPosts(offset: number) {
    this._postService.getHotPosts(offset)
      .subscribe(posts => {
        posts.map(p => {
          return {
            id: p.id,
            title:  p.title,
            description: p.description,
            postImage:   p.postImage,
            createdDate: p.createdDate,
            enabled:   p.enabled,
            upvotedPostByCurrentUser:  p.upvotedPostByCurrentUser,
            reportedPostByCurrentUser:  p.reportedPostByCurrentUser,
            username:   p.username,
            userId: p.userId,
            userProfileImage: p.userProfileImage,
            commentsCount: p.commentsCount,
            upvotesCount:   p.upvotesCount,
            reportsCount: p.reportsCount,
            isActiveComment: false,
            isActivePost: false,
            isActiveReport: false

          };
        }).forEach(item => this.posts.push(item));
      });
  }


  private loadTrendingPosts(offset: number) {
    this._postService.getTrendingPosts(offset)
      .subscribe(posts => {
        posts.map(p => {
          return {
            id: p.id,
            title:  p.title,
            description: p.description,
            postImage:   p.postImage,
            createdDate: p.createdDate,
            enabled:   p.enabled,
            upvotedPostByCurrentUser:  p.upvotedPostByCurrentUser,
            reportedPostByCurrentUser:  p.reportedPostByCurrentUser,
            username:   p.username,
            userId: p.userId,
            userProfileImage: p.userProfileImage,
            commentsCount: p.commentsCount,
            upvotesCount:   p.upvotesCount,
            reportsCount: p.reportsCount,
            isActiveComment: false,
            isActivePost: false,
            isActiveReport: false
          };
        }).forEach(item => this.posts.push(item));
      });
  }

  private loadFreshPosts(offset: number) {
    this._postService.getFreshPosts(offset)
      .subscribe(posts => {
        posts.map(p => {
          return {
            id: p.id,
            title:  p.title,
            description: p.description,
            postImage:   p.postImage,
            createdDate: p.createdDate,
            enabled:   p.enabled,
            upvotedPostByCurrentUser:  p.upvotedPostByCurrentUser,
            reportedPostByCurrentUser:  p.reportedPostByCurrentUser,
            username:   p.username,
            userId: p.userId,
            userProfileImage: p.userProfileImage,
            commentsCount: p.commentsCount,
            upvotesCount:   p.upvotesCount,
            reportsCount: p.reportsCount,
            isActiveComment: false,
            isActivePost: false,
            isActiveReport: false
          };
        }).forEach(item => this.posts.push(item));

      });
  }
  private loadAllTopCommentedPosts() {
    this._postService.getTopCommentedPosts()
      .subscribe(posts => {
        this.topCommented = posts;
      })
    ;
  }

  clearText() {
    this.commentText = null;
  }

  addComment(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._commentService.addComment(post_id, this.commentText);
  }

  upvotePost(post_id: any) {
    post_id = parseFloat(post_id.toString());
    this._postService.upvotePost(post_id);
  }

  removePost(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._postService.removePost(post_id);
  }

  reportPost(post_id: number) {
    post_id = parseFloat(post_id.toString());
    this._postService.reportPost(post_id);
  }
}
