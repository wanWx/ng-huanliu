/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyFileComponent } from './my-file.component';

describe('MyFileComponent', () => {
  let component: MyFileComponent;
  let fixture: ComponentFixture<MyFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
