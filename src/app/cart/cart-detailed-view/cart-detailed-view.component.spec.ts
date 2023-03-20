import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetailedViewComponent } from './cart-detailed-view.component';

describe('CartDetailedViewComponent', () => {
  let component: CartDetailedViewComponent;
  let fixture: ComponentFixture<CartDetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDetailedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
