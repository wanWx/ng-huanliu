import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevelopmentEffortComponent } from './components';


const routes: Routes = [
  { path: '', redirectTo: 'development-effort', pathMatch: 'full' },
  { path: 'development-effort', component: DevelopmentEffortComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataReportRoutingModule { }
