import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinViewComponent } from './min-view/min-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';



@NgModule({
  declarations: [
    MinViewComponent,
    DetailViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
