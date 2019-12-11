import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContainerHeaderComponent } from './components';
import { HttpService, CoolLocalStorage, CoolSessionStorage, httpInterceptorProviders } from '../common';

const SHAREDS = [
  CommonModule,
  NgZorroAntdModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

const COMPONENTS = [
  ContainerHeaderComponent
];

@NgModule({
  imports: [
    ...SHAREDS
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ],
  providers: [
    HttpService,
    CoolLocalStorage,
    CoolSessionStorage,
    httpInterceptorProviders
  ]
})
export class SharedModule { }
