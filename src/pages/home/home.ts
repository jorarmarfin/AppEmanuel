import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HermanosPage } from '../hermanos/hermanos';
import { ActividadesPage } from '../actividades/actividades';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  listHermanos():void{
  	this.navCtrl.push(HermanosPage);
  }
  listActividades():void{
  	this.navCtrl.push(ActividadesPage);
  }

}
