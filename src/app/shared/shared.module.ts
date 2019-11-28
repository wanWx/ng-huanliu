import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHAREDS = [
  NgZorroAntdModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    ...SHAREDS
  ],
  declarations: [],
  exports: [
    ...SHAREDS
  ]
})
export class SharedModule { }
