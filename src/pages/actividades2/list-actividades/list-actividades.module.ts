import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListActividadesPage } from './list-actividades';

@NgModule({
  declarations: [
    ListActividadesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListActividadesPage),
  ],
})
export class ListActividadesPageModule {}
