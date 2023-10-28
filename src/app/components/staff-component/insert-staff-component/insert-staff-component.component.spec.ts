import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStaffComponentComponent } from './insert-staff-component.component';

describe('InsertStaffComponentComponent', () => {
  let component: InsertStaffComponentComponent;
  let fixture: ComponentFixture<InsertStaffComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertStaffComponentComponent]
    });
    fixture = TestBed.createComponent(InsertStaffComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
