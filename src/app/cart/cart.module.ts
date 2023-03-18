import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailedViewComponent } from './cart-detailed-view/cart-detailed-view.component';
import { CartMinifiedViewComponent } from './cart-minified-view/cart-minified-view.component';

@NgModule({
  declarations: [CartDetailedViewComponent, CartMinifiedViewComponent],
  imports: [CommonModule],
})
export class CartModule {}
