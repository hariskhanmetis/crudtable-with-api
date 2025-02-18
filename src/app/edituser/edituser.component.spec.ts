import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserComponent } from './edituser.component';

describe('EdituserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUserComponent]
    });
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
