import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriePopUpComponent } from './add-categorie-pop-up.component';

describe('AddCategoriePopUpComponent', () => {
  let component: AddCategoriePopUpComponent;
  let fixture: ComponentFixture<AddCategoriePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoriePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoriePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
