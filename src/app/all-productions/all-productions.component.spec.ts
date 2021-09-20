import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductionsComponent } from './all-productions.component';

describe('AllProductionsComponent', () => {
  let component: AllProductionsComponent;
  let fixture: ComponentFixture<AllProductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
