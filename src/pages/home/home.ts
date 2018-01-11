import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListHermanosPage } from '../hermanos/list-hermanos/list-hermanos';
import { ListActividadesPage } from '../actividades/list-actividades/list-actividades';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  listActividades():void{
  	this.navCtrl.push(ListActividadesPage);
  }
  listHermanos():void{
  	this.navCtrl.push(ListHermanosPage);
  }

}
