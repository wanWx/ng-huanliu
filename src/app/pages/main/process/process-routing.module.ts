import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './process.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  }
];

export const ProcessRoutingModule = RouterModule.forChild(routes);
