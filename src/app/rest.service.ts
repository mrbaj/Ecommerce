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

  getAllProducts(): Observable<[product]> {
    return this.http
      .get<ProductData>('./assets/products.json')
      .pipe(map((res) => res.data));
  }

  checkProductsCategoryAssignments(
    cid: any,
    pid: any
  ): Observable<PCAssignment> {
    return this.http
      .get<PCAssignmentData>('./assets/productCategoryAssignments.json')
      .pipe(
        map((res) => res.data),
        switchMap((res) => from(res)),
        filter((res: PCAssignment) => {
          return res.product_id == pid && res.category_id == cid;
        })
      );
  }

  getAllCategories(): Observable<[category]> {
    return this.http
      .get<CategoryData>('./assets/categories.json')
      .pipe(map((res) => res.data));
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
