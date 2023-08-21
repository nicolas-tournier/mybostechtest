import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCellComponent } from './form-cell.component';

describe('FormCellComponent', () => {
  let component: FormCellComponent;
  let fixture: ComponentFixture<FormCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCellComponent]
    });
    fixture = TestBed.createComponent(FormCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
