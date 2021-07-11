import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserCompComponent } from './add-new-user-comp.component';

describe('AddNewUserCompComponent', () => {
  let component: AddNewUserCompComponent;
  let fixture: ComponentFixture<AddNewUserCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewUserCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
