import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintodosCompComponent } from './maintodos-comp.component';

describe('MaintodosCompComponent', () => {
  let component: MaintodosCompComponent;
  let fixture: ComponentFixture<MaintodosCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintodosCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintodosCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
