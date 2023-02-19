import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-circle-card',
  templateUrl: './circle-card.component.html',
  styleUrls: ['./circle-card.component.css'],
})
export class CircleCardComponent {
  @Input() imageUrl?: string;
  @Input() title?: string;

  constructor() {}
}
