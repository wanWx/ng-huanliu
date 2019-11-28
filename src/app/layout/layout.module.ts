import { NgModule } from '@angular/core';
import { LoginComponent } from '../pages/login';
import { SharedModule } from '../shared';
import { DefaultComponent } from './default';

const COMPONENTS = [
  LoginComponent,
  DefaultComponent
];

@NgModule({
    imports: [
      SharedModule
    ],
    declarations: [
      ...COMPONENTS
    ],
    exports: [
      ...COMPONENTS
    ]
})

export class LayoutModule {}
