import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../../models/User'
import { Observable } from 'rxjs/Observable'
import { URL_SERVER } from '../../base-util/url-server'
import { Token } from '../../models/Token'
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private _http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  auth(user: User): Observable<any> {
    let headers: Headers = new Headers()
    headers.set("Content-type", "application/json")

    return this._http
      .post(`${URL_SERVER}/auth`, user, { headers: headers })
      .map((response: Response) => response.json() as Token)
      .catch(error => Observable.throw('Unauthorized'))
  }
}
