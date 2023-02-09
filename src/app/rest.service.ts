import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import './modal';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  auth_Token = 'iv1utjpugfhle558si7btfemces24z2';
  rest_Url = '/api/';

  constructor(private http: HttpClient) {
    this.getProductsCategoryAssignments();
  }

  getAllProducts() {
    this.http.get<JsonData>('./assets/products.json').subscribe((res) => {
      return res.data;
    });
  }

  getProductsCategoryAssignments() {
    this.http
      .get<JsonData>('./assets/productCategoryAssignments.json')
      .subscribe((res) => {
        console.log(res.data);
        return res.data;
      });
  }

  getAllCategories() {
    this.http.get<JsonData>('./assets/categories.json').subscribe((res) => {
      return res.data;
    });
  }

  getReviews(productId: number) {
    this.http
      .get<ReviewData>('./assets/reviews.json')
      .pipe(
        map((a) => a.data),
        map((a) => a.filter((a) => a.product_id == productId))
      )
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }

  getProductImages(productId: number) {
    this.http
      .get<ProductImageData>('./assets/productimages.json')
      .pipe(
        map((a) => a.data),
        map((a) => a.filter((a) => a.product_id == productId))
      )
      .subscribe((res) => {
        console.log(res);
        return res;
      });
  }
}
