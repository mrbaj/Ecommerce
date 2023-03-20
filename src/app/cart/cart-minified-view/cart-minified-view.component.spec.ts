import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMinifiedViewComponent } from './cart-minified-view.component';

describe('CartMinifiedViewComponent', () => {
  let component: CartMinifiedViewComponent;
  let fixture: ComponentFixture<CartMinifiedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMinifiedViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartMinifiedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
