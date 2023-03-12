import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CapsuleButtonComponent } from 'src/app/components/capsule-button/capsule-button.component';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-categorization',
  templateUrl: './categorization.component.html',
  styleUrls: ['./categorization.component.css'],
})
export class CategorizationComponent implements OnInit {
  selectedId?: number = -1;
  data: category[] = [];
  @Output() categorySelected = new EventEmitter();

  constructor(private rest: RestService) {}

  ngOnInit(): void {
    this.rest.getAllCategories().subscribe((res) => {
      this.data = res;
    });
  }

  onClick(categoryId?: number, event?: any) {
    this.selectedId = categoryId;
    console.log(this.selectedId, categoryId, event);
    this.categorySelected.emit(this.selectedId);
  }
}
