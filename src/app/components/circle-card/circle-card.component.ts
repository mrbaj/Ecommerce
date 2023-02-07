import { Component } from '@angular/core';
import { CircleCardService } from 'src/app/services/circle-card.service';

@Component({
  selector: 'app-circle-card',
  templateUrl: './circle-card.component.html',
  styleUrls: ['./circle-card.component.css'],
})
export class CircleCardComponent {
  imageUrl?: string;
  title?: string;
  constructor(private dataService: CircleCardService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.imageUrl = data.imageUrl;
      this.title = data.title;
    });
  }
}
