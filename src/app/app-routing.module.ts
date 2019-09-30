import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-list/employee-detail/employee-detail.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { EmployeeDetailEditComponent } from './employee-list/employee-detail-edit/employee-detail-edit.component';
import { EmployeeNotSelectedComponent } from './employee-list/employee-not-selected/employee-not-selected.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    children: [
      {
        path: '',
        pathMatch:'full',
        component: EmployeeNotSelectedComponent
      },
      {
        path: 'new',
        component: EmployeeDetailEditComponent
      }
      , {
        path: ':id',
        component: EmployeeDetailComponent
      },
      {
        path: ':id/edit',
        component: EmployeeDetailEditComponent
      }
    ]
  },
  {
    path: "not-found",
    component: PageNotfoundComponent
  },
  {
    path: "**",
    redirectTo: "/not-found"
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
