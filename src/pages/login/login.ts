import { User } from './../../models/User';
import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service"
import { SessionProvider } from "../../providers/session/session"
import { Token } from "../../models/Token"
import { Subscription } from "rxjs/Subscription"

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {email: "user@test.com.br", password: "test@123"}
  private _subscription: Subscription

  constructor(
   private _navCtrl: NavController,
   private _navParams: NavParams,
   private _authService: AuthServiceProvider,
   private _sessionProvider: SessionProvider,
   private _alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewUnload() {
    this._subscription.unsubscribe()
  }

 login(): void {
    this._authService.auth(this.user)
      .subscribe((token : Token) => {
        this._sessionProvider.save(token).then(data => {
          this._navCtrl.push(HomePage)
          }).catch(error => console.log(error))
      }, error => {
        this._errorOnAuth(error)
      });
  }

  _errorOnAuth(error: any):void {
    this._alertController.create({
      title: "Error",
      subTitle: error,
      buttons: ["Exit"]
    }).present()
  }

}
