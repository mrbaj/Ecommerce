import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contentHeight = document.body.clientHeight;
  viewportHeight = window.innerHeight;

  title = 'Ecommerce';
  imageUrl: any;
  cardTile: any;
  price: string;
  save: string;
  percentage: string;
  productData: object;
  constructor(private rest: RestService, private router: Router) {
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

  isNotLoginPage(): boolean {
    const currentRoute = this.router.url;
    return !currentRoute.includes('login');
  }
}
