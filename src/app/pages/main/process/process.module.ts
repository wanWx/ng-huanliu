import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonCoModule } from '../../../common/common.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProcessRoutingModule } from './process-routing.module';
import { IndexComponent } from './index/index.component';
import { ProcessComponent } from './process.component';


@NgModule({
  declarations: [IndexComponent, ProcessComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProcessRoutingModule,
    CommonCoModule
  ]
})
export class ProcessModule { }
