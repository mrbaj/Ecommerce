import { Component } from '@angular/core';
import { ProductViewService } from 'src/app/services/product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent {
  imageUrl?: string;
  imageDes?: string;
  price?: string;
  quantity?: string;
  total?: string;

  constructor(private dataService: ProductViewService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.imageUrl = data.imageUrl;
      this.imageDes = data.imageDes;
      this.price = data.price;
      this.quantity = data.quantity;
      this.total = data.total;
    });
  }
}
