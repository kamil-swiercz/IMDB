import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProductionComponent } from './detail-production.component';

describe('DetailProductionComponent', () => {
  let component: DetailProductionComponent;
  let fixture: ComponentFixture<DetailProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
