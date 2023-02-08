import { Component, OnInit } from '@angular/core';
import { DisplayCardService } from 'src/app/services/display-card.service';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css'],
})
export class DisplayCardComponent implements OnInit {
  imageUrl?: string;
  title?: string;
  price?: string;
  save?: string;
  percentage?: string;

  constructor(private dataService: DisplayCardService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.imageUrl = data.imageUrl;
      this.title = data.title;
      this.price = data.price;
      this.save = data.save;
      this.percentage = data.percentage;
    });
  }
}
