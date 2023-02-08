import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  auth_Token = 'iv1utjpugfhle558si7btfemces24z2';
  rest_Url = '/api/';

  constructor(private http: HttpClient) {
    this.getAllProducts();
  }

  getAllProducts() {
    this.http
      .get(this.rest_Url + 'catalog/products', {
        headers: {
          'X-Auth-Token': this.auth_Token,
        },
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
