/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstateManageEditComponent } from './estate-manage-edit.component';

describe('EstateManageEditComponent', () => {
  let component: EstateManageEditComponent;
  let fixture: ComponentFixture<EstateManageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateManageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateManageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
