import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListHermanosPage } from './list-hermanos';

@NgModule({
  declarations: [
    ListHermanosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListHermanosPage),
  ],
})
export class ListHermanosPageModule {}
