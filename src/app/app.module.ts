import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HermanosPageModule } from '../pages/hermanos/hermanos.module';
import { HermanoPage } from '../pages/hermanos/hermanos';
import { ActividadesPageModule } from '../pages/actividades/actividades.module';
import { ActividadPage } from '../pages/actividades/actividades';

import { DrupalServicesProvider } from '../providers/drupal-services/drupal-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HermanoPage,
    ActividadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HermanosPageModule,
    ActividadesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HermanoPage,
    ActividadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrupalServicesProvider
  ]
})
export class AppModule {}
