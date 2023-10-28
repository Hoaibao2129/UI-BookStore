import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffComponentComponent } from './staff-component.component';

describe('StaffComponentComponent', () => {
  let component: StaffComponentComponent;
  let fixture: ComponentFixture<StaffComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffComponentComponent]
    });
    fixture = TestBed.createComponent(StaffComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
