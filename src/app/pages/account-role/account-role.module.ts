import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { AccountRoleRoutingModule } from './account-role-routing.module';
import { UserListComponent } from './components';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    SharedModule,
    AccountRoleRoutingModule
  ]
})
export class AccountRoleModule { }
