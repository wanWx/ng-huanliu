import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 重定向
  { path: 'main', loadChildren: './pages/main/main.module#MainModule' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
