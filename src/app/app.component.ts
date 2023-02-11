import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ecommerce';
  imageUrl: any;
  cardTile: any;
  price: string;
  save: string;
  percentage: string;
  productData: object;
  constructor(private rest: RestService) {
    this.imageUrl = 'https://via.placeholder.com/300x200';
    this.cardTile = 'Example Title';
    this.price = '50';
    this.save = '50';
    this.percentage = '50';
    this.productData = {
      imageUrl: 'https://via.placeholder.com/300x200',
      imageDes: 'Description',
      price: '100',
      quantity: '50',
      total: '50',
    };
  }
}
