import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserPopUpComponent } from './update-user-pop-up.component';

describe('UpdateUserPopUpComponent', () => {
  let component: UpdateUserPopUpComponent;
  let fixture: ComponentFixture<UpdateUserPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
