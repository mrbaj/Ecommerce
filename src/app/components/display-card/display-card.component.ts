import { Component, Input } from '@angular/core';

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

  constructor() {}
}
