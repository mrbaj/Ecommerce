import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() btnAddToCart = new EventEmitter();

  constructor() {}

  onClick() {
    this.btnAddToCart.emit();
  }
}
