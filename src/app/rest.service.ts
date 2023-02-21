import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable, switchMap } from 'rxjs';
import './modal';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  auth_Token = 'iv1utjpugfhle558si7btfemces24z2';
  rest_Url = '/api/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<product[]> {
    return this.http
      .get<ProductData>('./assets/products.json')
      .pipe(map((res) => res.data));
  }

  getProductsCategoryAssignments(): Observable<[allcategory]> {
    return this.http
      .get<AllCategoryData>('./assets/productCategoryAssignments.json')
      .pipe(map((res) => res.data));
  }

  getAllCategories(): Observable<[category]> {
    return this.http
      .get<CategoryData>('./assets/categories.json')
      .pipe(map((res) => res.data));
  }

  getReviews(productId: number) {
    return this.http.get<ReviewData>('./assets/reviews.json').pipe(
      map((a) => a.data),
      map((a) => a.filter((a) => a.product_id == productId))
    );
  }

  getProductImages(): Observable<[ProductImage]> {
    return this.http
      .get<ProductImageData>('./assets/productimages.json')
      .pipe(map((a) => a.data));
  }
}
