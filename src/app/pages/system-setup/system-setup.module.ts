import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { SystemSetupRoutingModule } from './system-setup-routing.module';
import { ParameterSettingComponent } from './components';



@NgModule({
  declarations: [
    ParameterSettingComponent
  ],
  imports: [
    SharedModule,
    SystemSetupRoutingModule
  ]
})
export class SystemSetupModule { }
