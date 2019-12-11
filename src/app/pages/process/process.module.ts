import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';
import { ProcessRoutingModule } from './process-routing.module';
import { ProcessListComponent, SubmitProcessComponent, DesignTaskComponent } from './components';


@NgModule({
  declarations: [
    ProcessListComponent,
    SubmitProcessComponent,
    DesignTaskComponent
  ],
  imports: [
    SharedModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
