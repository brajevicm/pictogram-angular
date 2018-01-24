import { Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TOKEN } from '../../constants';

/**
 * Created by brajevicm on 13/01/18.
 */
@Injectable()
export class SharedService {

  public localError(error: Response) {
    console.error(error);
    return Observable.throw(error.json() || 'Server error');
    // TODO ako postoji error obrisi sve i vrati ga na login page
  }

  public getOptions(): RequestOptions {
    const headers = this.getHeaders();
    return new RequestOptions({headers: headers});
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.hasToken()) {
      headers.append('Authorization', 'Bearer ' + this.getToken());
    }

    return headers;
  }

  public isUserLoggedIn(): boolean {
    const JWT_REGEX_PATTERN = new RegExp(/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/);
    if (this.hasToken()) {
      return JWT_REGEX_PATTERN.test(this.getToken());
    }
    return false;
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN).replace(/['"]+/g, '');
  }

  public setToken(token: string): void {
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  public hasToken(): boolean {
    return !!localStorage.getItem(TOKEN);
  }
}

