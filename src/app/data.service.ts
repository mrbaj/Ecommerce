import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  bigCommerceDetails = {
    ACCESS_TOKEN: 'iv1utjpugfhle558si7btfemces24z2',
    CLIENT_NAME: 'myzone',
    CLIENT_ID: 'cbv90vts1s5gu8eyhu6ldk2nz17o5cm',
    CLIENT_SECRET:
      '47d10c4b9b7134049470480e9e88ed89239487cb83f8b9cb5189704998b499a7',
    NAME: 'myzone',
    API_PATH: 'https://api.bigcommerce.com/stores/1rzurzqyki/v3/',
  };

  constructor() {}
}
