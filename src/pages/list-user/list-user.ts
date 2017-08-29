import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ListUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-user',
  templateUrl: 'list-user.html',
})
export class ListUserPage {
  private _users: User[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    this._userProvider.findAll().subscribe((users) => {
      console.log(users)
    })
  }

  get users(): User[]{
    return this._users
  }

}
