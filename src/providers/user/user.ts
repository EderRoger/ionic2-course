import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { URL_SERVER } from '../../base-util/url-server';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable'
import { SessionProvider } from '../session/session'
import { Token } from '../../models/Token'
/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserProvider {
  private readonly API_USERS = `${URL_SERVER}/api/users`
  private _token: any

  constructor(private _http: Http, private _session: SessionProvider) {
  this._token = this._session.token
    .then((token: Token) => this._token = token)
  }

  findAll(): Observable<any> {
    let headers: Headers = new Headers()
    headers.set("Authorization", `JWT ${this._token.token}`)

    return this._http
      .get(this.API_USERS, {headers})
      .map((response: Response) => response.json())
  }
}
