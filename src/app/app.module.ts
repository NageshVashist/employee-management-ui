import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employee-list/employee-detail/employee-detail.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DropdownDirective } from './dropdown.directive';
import { EmployeeDetailEditComponent } from './employee-list/employee-detail-edit/employee-detail-edit.component';
import { EmployeeDetailNewComponent } from './employee-list/employee-detail-new/employee-detail-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    PageNotfoundComponent,
    DropdownDirective,
    EmployeeDetailEditComponent,
    EmployeeDetailNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
