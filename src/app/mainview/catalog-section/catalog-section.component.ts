import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { filter, from, of, switchMap, tap } from 'rxjs';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-catalog-section',
  templateUrl: './catalog-section.component.html',
  styleUrls: ['./catalog-section.component.css'],
})
export class CatalogSectionComponent implements OnInit, OnChanges {
  @Input() categorySelected?: number;
  products: product[] = [];

  constructor(private rest: RestService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshProducts();
  }

  ngOnInit(): void {
    this.refreshProducts();
  }

  refreshProducts() {
    this.products = [];
    if (this.categorySelected == 9999) {
      this.rest.getAllProducts().subscribe((res) => {
        this.products = res;
      });
    } else {
      this.rest
        .getAllProducts()
        .pipe(
          switchMap((res) => from(res)),
          filter((res) => {
            return this.checkProductinCategory(res.id, this.categorySelected);
          })
        )
        .subscribe((res) => {
          this.products.push(res);
        });
    }
    console.log(this.products);
  }

  checkProductinCategory(pId: any, cId: any): boolean {
    this.rest.checkProductsCategoryAssignments(pId, cId).subscribe((res) => {
      if (cId == res.category_id && pId == res.product_id) return true;
      else return false;
    });
  }
}
