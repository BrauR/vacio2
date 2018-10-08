import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { CienciasPage } from '../ciencias/ciencias';
import { DibujoPage } from '../dibujo/dibujo';
import { RoboticaPage } from '../robotica/robotica';
import { PyEPage } from '../py-e/py-e';
import { MiPage } from '../mi/mi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  historia = HistoriaPage;
  ciencias = CienciasPage;
  dibujo = DibujoPage;
  robotica = RoboticaPage;
  pye = PyEPage;
  Mi = MiPage;
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
clickPyE(){
  this.navCtrl.push(this.pye);
}
clickMi(){
  this.navCtrl.push(this.Mi);
}
}
