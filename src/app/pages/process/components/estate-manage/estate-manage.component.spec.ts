/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EstateManageComponent } from './estate-manage.component';

describe('EstateManageComponent', () => {
  let component: EstateManageComponent;
  let fixture: ComponentFixture<EstateManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
