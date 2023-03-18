import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, from, map, switchMap, tap } from 'rxjs';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // product
  id!: number | string | null;
  imgURL = '';
  images: ProductImage[] = [];
  active = 0;
  product!: product;

  constructor(private rest: RestService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(+this.id!);
    this.fetchProductDetails();
    this.fetchImages();
  }
  fetchProductDetails() {
    this.rest
      .getAllProducts()
      .pipe(map((a) => a.filter((a) => a.id == this.id)))
      .subscribe((data) => {
        this.product = data[0];
        console.log(this.product);
      });
  }

  fetchImages() {
    this.rest
      .getProductImages()
      .pipe(
        tap(() => console.log('called')),
        switchMap((a) => from(a)),
        filter((a) => {
          console.log(a.product_id == +this.id!);
          return a.product_id == +this.id!;
        })
      )
      .subscribe((data) => {
        this.images.push(data);
        this.imgURL = this.images[0].url_standard;
        this.active = this.images[0].id;
      });
  }

  changeImage(id: number) {
    this.active = id;
    for (let i = 0; i < this.images.length; i++) {
      if (id == this.images[i].id) {
        this.imgURL = this.images[i].url_standard;
        break;
      }
    }
  }

  counter = Array;
}
