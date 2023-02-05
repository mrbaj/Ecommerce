import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinViewComponent } from './min-view.component';

describe('MinViewComponent', () => {
  let component: MinViewComponent;
  let fixture: ComponentFixture<MinViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
