import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { CienciasPage } from '../pages/ciencias/ciencias';
<<<<<<< HEAD
=======
import { DibujoPage } from '../pages/dibujo/dibujo';
>>>>>>> Dibujo

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
<<<<<<< HEAD
    CienciasPage
=======
    CienciasPage,
    DibujoPage
>>>>>>> Dibujo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
<<<<<<< HEAD
    CienciasPage
=======
    CienciasPage,
    DibujoPage
>>>>>>> Dibujo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
