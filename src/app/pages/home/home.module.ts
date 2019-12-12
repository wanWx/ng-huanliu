import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './components/index';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
