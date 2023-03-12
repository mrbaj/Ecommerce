import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  defer,
  filter,
  forkJoin,
  from,
  iif,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { Router } from '@angular/router';

import { RestService } from 'src/app/rest.service';
@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.component.html',
  styleUrls: ['./catalog-section.component.css'],
})
export class CatalogSectionComponent implements OnInit, OnChanges {
  @Input() categorySelected?: number;
  products: product[] = [];
  images = [];

  constructor(private restService: RestService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges Work');
    console.log('category selected', this.categorySelected);
    if (this.categorySelected != changes['categorySelected'].previousValue) {
      this.refreshProducts();
    }
  }

  ngOnInit(): void {
    this.refreshProducts();
  }

  refreshProducts() {
    this.products = [];
    forkJoin([
      this.restService.getAllProducts(),
      this.restService.getProductImages(),
    ])
      .pipe(
        switchMap((value) => {
          let products = value[0];
          let images = value[1];
          products.forEach(function (prodItem) {
            images.forEach(function (imgItem) {
              if (prodItem.id == imgItem.product_id) {
                prodItem.image = imgItem.url_standard;
              }
            });
          });
          if (this.categorySelected !== 9999) {
            products = products.filter((item) => {
              return item.categories?.includes(this.categorySelected!);
            });
          }
          return of(products);
        })
      )
      .subscribe((value: any) => {
        this.products = value;
      });
  }
}
