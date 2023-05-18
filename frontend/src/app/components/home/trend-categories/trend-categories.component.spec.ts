import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCategoriesComponent } from './trend-categories.component';

describe('TrendCategoriesComponent', () => {
  let component: TrendCategoriesComponent;
  let fixture: ComponentFixture<TrendCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
