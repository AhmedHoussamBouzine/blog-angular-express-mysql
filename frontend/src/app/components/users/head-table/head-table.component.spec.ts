import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTableComponent } from './head-table.component';

describe('HeadTableComponent', () => {
  let component: HeadTableComponent;
  let fixture: ComponentFixture<HeadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
