import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductViewComponent } from '../components/product-view/product-view.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProductDetailsComponent, ProductViewComponent],
  imports: [CommonModule, MatDividerModule, MatIconModule],
})
export class ProductsdetailsModule {}
