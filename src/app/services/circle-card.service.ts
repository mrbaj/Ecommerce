import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CircleCardService {
  constructor() {}
  getData() {
    // You can replace the hardcoded data with the data you receive from the API
    return of({
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Example Title',
    });
  }
}
