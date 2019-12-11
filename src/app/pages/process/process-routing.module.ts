import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessListComponent, SubmitProcessComponent, DesignTaskComponent } from './components';

const routes: Routes = [
  { path: '', redirectTo: 'process-list', pathMatch: 'full' },
  { path: 'process-list', component: ProcessListComponent },
  { path: 'submit-process', component: SubmitProcessComponent },
  { path: 'design-task', component: DesignTaskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProcessRoutingModule {}
