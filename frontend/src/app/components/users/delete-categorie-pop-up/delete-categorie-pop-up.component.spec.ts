import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategoriePopUpComponent } from './delete-categorie-pop-up.component';

describe('DeleteCategoriePopUpComponent', () => {
  let component: DeleteCategoriePopUpComponent;
  let fixture: ComponentFixture<DeleteCategoriePopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteCategoriePopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategoriePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
