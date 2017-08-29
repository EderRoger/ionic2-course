import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListUserPage } from '../pages/list-user/list-user';
import { AddUserPage } from '../pages/add-user/add-user';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SessionProvider } from '../providers/session/session';
import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';

const imports = [
  MyApp,
  AddUserPage,
  ListUserPage,
  HomePage,
  LoginPage,
  TabsPage
]

@NgModule({
  declarations: imports,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: imports,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    SessionProvider,
    UserProvider
  ]
})
export class AppModule {}
