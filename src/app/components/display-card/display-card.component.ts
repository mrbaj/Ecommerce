
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css'],
})
export class DisplayCardComponent {
  @Input() imageUrl?: string;
  @Input() title?: string;
  @Input() price?: number;
  @Input() save?: number;
  @Input() percentage?: number;
  @Input() productId?: number;

  constructor(private router: Router) {}

  openFullView() {
    this.router.navigateByUrl(`/product/${this.productId}`);
    }

  @Output() btnAddToCart = new EventEmitter();

  onClick() {
    this.btnAddToCart.emit();
  }
}
