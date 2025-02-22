import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AccountListComponent } from './views/account-list/account-list.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    {
      path:'accountList', component: AccountListComponent
    }


    
  ] }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
