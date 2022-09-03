import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfuiAngularComponent } from './afui-angular.component';

describe('AfuiAngularComponent', () => {
  let component: AfuiAngularComponent;
  let fixture: ComponentFixture<AfuiAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfuiAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfuiAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
