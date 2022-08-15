import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';

const routes: Routes = [
  {path:'admin', component:NavAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
