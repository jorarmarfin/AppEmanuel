import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListActividadesPageModule } from '../pages/actividades/list-actividades/list-actividades.module';
import { ListHermanosPageModule } from '../pages/hermanos/list-hermanos/list-hermanos.module';
import { ModalContentPage } from '../pages/hermanos/list-hermanos/list-hermanos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalContentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListActividadesPageModule,
    ListHermanosPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
