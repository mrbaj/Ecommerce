import { InteractivityChecker } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  catalogData = [];
  categorySelected = 9999;

  constructor(private rest: RestService) {}

  ngOnInit(): void {}

  selectCategory(event: any) {
    console.log('homePage', event);
    this.categorySelected = event;
  }
}
