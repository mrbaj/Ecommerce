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
  constructor(private rest: RestService) {}
  categories: Observable<[category]> = new Observable();
  data: category[] = [];
  @ViewChildren(CapsuleButtonComponent)
  viewChildren!: QueryList<CapsuleButtonComponent>;
  @Output() categorySelected = new EventEmitter();
  ngOnInit(): void {
    this.categories = this.rest.getAllCategories();
    this.categories.subscribe((res) => {
      this.data = res;
    });
  }

  onClick(event: any) {
    this.viewChildren.forEach((element) => {
      console.log(event.target);
      if (event.target.id == element.buttonText) {
        element.isDark = true;
        this.categorySelected.emit(element.id);
      } else element.isDark = false;
    });
  }
}
