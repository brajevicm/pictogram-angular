import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IPost} from '../_models/post';
import 'rxjs/operator/map';
import 'rxjs/operator/do';
import 'rxjs/operator/catch';
import {Injectable} from '@angular/core';
import {SharedService} from './shared.service';
import {API_URL, POST, POSTS, TOKEN, USER} from '../../constants';

/**
 * Created by brajevicm on 2/06/17.
 */

@Injectable()
export class PostService {
  private _upvote = 'upvote.php';

  constructor(private _http: Http,
              private _sharedService: SharedService) {
  }

  public addPost(title: string): void {
    if (this._sharedService.isUserLoggedIn()) {
      const data = JSON.stringify({title: title});
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS;

      this._http.post(url, data, options)
        .map(res => res)
        .subscribe(next => next,
          err => this._sharedService.localError(err)
        )
      ;
    }
  }

// finished
  getHotPosts(offset: number): Observable<IPost[]> {
    if (this._sharedService.isUserLoggedIn()) {
      const type = '?type=hot&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    } else {
      const type = '?type=hot&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    }
  }


// @TODO parameter query
  getTrendingPosts(offset: number): Observable<IPost[]> {
    if (this._sharedService.isUserLoggedIn()) {
      const type = '?type=trending&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    } else {
      const type = '?type=trending&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    }
  }

// @TODO parameter query
  getFreshPosts(offset: number): Observable<IPost[]> {
    if (this._sharedService.isUserLoggedIn()) {
      const type = '?type=fresh&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    } else {
      const type = '?type=fresh&page=' + offset + '&size=3';
      const options = this._sharedService.getOptions();
      const url = API_URL + POSTS + type;

      return this._http.get(url, options)
        .map((response: Response) => <IPost[]> response.json().content)
        // .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this._sharedService.localError);
    }
  }

  // TODO edit
  getPostsFromUser(id: number, offset: number): Observable<IPost[]> {
    const options = this._sharedService.getOptions();
    const page = '?page=' + offset + '&size=3';
    const url = API_URL + USER + id + '/' + POSTS + page;

    return this._http.get(url, options)
      .map((response: Response) => <IPost[]> response.json().content)
      .catch(this._sharedService.localError);
  }

  // @TODO parameter query
  getUpvotedPosts(id: number, offset: number): Observable<IPost[]> {
    const options = this._sharedService.getOptions();
    const page = '?page=' + offset + '&size=3';
    const url = API_URL + USER + id + '/' + POSTS + page;
    return this._http.get(url, options)
      .map((response: Response) => <IPost[]> response.json().content)
      .catch(this._sharedService.localError);
  }

  // @TODO parameter query
  getTopCommentedPosts(): Observable<IPost[]> {
    const options = this._sharedService.getOptions();
    const type = '?type=trending&page=0&size=3';
    const url = API_URL + POSTS + type;
    return this.getTrendingPosts(0);
    /*return this._http.get(url, options)
      .map((response: Response) => <IPost[]> response.json().posts)
      .catch(this._sharedService.localError);*/
  }

  getPost(id: number): Observable<IPost> {
    const options = this._sharedService.getOptions();
    const url = API_URL + POST + id;

    return this._http.get(url, options)
      .map((response: Response) => <IPost> response.json())
      .catch(this._sharedService.localError);
  }

  upvotePost(id: number): void {
    const headers = this._sharedService.getOptions();
    const url = API_URL + POST + id;

    this._http.put(url, null, headers)
      .map(res => res)
      .subscribe(next => next,
        err => this._sharedService.localError(err)
      );
  }

  // @TODO fixed
  removePost(id: number): void {
    const headers = this._sharedService.getOptions();
    const url = API_URL + POST + id;
    this._http.delete(url, headers)
      .map(res => res)
      .subscribe(next => next,
        err => this._sharedService.localError(err)
      );
  }

  // @TODO fixed
  reportPost(id: number): void {
    const data = JSON.stringify({post_id: id});
    const options = this._sharedService.getOptions();
    const url = API_URL + POST + id;

    this._http.patch(url, null, options)
      .map(res => res)
      .subscribe(next => next,
        err => this._sharedService.localError(err)
      );
  }

}
