import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParameterSettingComponent } from './components';


const routes: Routes = [
  { path: '', redirectTo: 'parameter-setting', pathMatch: 'full' },
  { path: 'parameter-setting', component: ParameterSettingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSetupRoutingModule { }
