import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { DibujoPage } from '../dibujo/dibujo';
import { RoboticaPage } from '../robotica/robotica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  ciencias = CienciasPage;
  dibujo = DibujoPage;
  robotica = RoboticaPage;
  constructor(public navCtrl: NavController) {

  }
clickHistoria(){
  this.navCtrl.push(this.historia);
}
clickCiencias(){
  this.navCtrl.push(this.ciencias);
}
clickDibujo(){
  this.navCtrl.push(this.dibujo);
}
clickRobotica(){
  this.navCtrl.push(this.robotica);
}
}
