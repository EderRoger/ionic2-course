import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Token } from "../../models/Token"
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SessionProvider {
  private static readonly TOKEN: string = 'TOKEN'

  constructor(private _storage: Storage) {
    console.log('Hello SessionProvider Provider');
  }

  get token(): Promise<Token> {
    return this._storage.get(SessionProvider.TOKEN) as Promise<Token>
  }

  save(token: Token): Promise<any>{
   return this._storage.set(SessionProvider.TOKEN, token)
  }
}
