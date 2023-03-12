import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.css'],
})
export class ProductViewPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {}
}
