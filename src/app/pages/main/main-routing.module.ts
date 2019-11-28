import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/process', pathMatch: 'full' },
      { path: 'process', loadChildren: './process/process.module#ProcessModule' }
    ]
  }
];

export const MainRoutingModule = RouterModule.forChild(routes);
