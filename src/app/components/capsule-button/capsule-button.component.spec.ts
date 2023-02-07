import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleButtonComponent } from './capsule-button.component';

describe('CapsuleButtonComponent', () => {
  let component: CapsuleButtonComponent;
  let fixture: ComponentFixture<CapsuleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapsuleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsuleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
