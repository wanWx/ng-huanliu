import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';
import { DefaultComponent } from './layout';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 重定向
  {
    path: 'main',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: './pages/home#HomeModule'
      },
      {
        path: 'process',
        loadChildren: './pages/process#ProcessModule'
      },
      {
        path: 'report',
        loadChildren: './pages/data-report#DataReportModule'
      },
      {
        path: 'account-role',
        loadChildren: './pages/account-role#AccountRoleModule'
      },
      {
        path: 'system-setup',
        loadChildren: './pages/system-setup#SystemSetupModule'
      }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
