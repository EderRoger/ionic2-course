import { Component } from '@angular/core';

import { AddUserPage } from '../add-user/add-user';
import { ListUserPage } from '../list-user/list-user';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabAddUser = AddUserPage;
  tabListUser = ListUserPage;

  constructor() {

  }
}
