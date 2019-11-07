import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';



@NgModule({
  declarations: [MainComponent, LeftControlComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingModule
  ]
})
export class MainModule { }
