import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  // product
  constructor(private rest: RestService) {}
  ngOnInit(): void {}
}
