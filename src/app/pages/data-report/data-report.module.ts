import { NgModule } from '@angular/core';

import { DataReportRoutingModule } from './data-report-routing.module';
import { SharedModule } from 'src/app/shared';
import { DevelopmentEffortComponent } from './components';


@NgModule({
  declarations: [
    DevelopmentEffortComponent
  ],
  imports: [
    SharedModule,
    DataReportRoutingModule
  ]
})
export class DataReportModule { }
