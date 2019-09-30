import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeItemComponent } from './employee-list/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './employee-list/employee-detail/employee-detail.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DropdownDirective } from './dropdown.directive';
import { EmployeeDetailEditComponent } from './employee-list/employee-detail-edit/employee-detail-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTransport } from './service/data.transport';
import { EmployeeNotSelectedComponent } from './employee-list/employee-not-selected/employee-not-selected.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    PageNotfoundComponent,
    DropdownDirective,
    EmployeeDetailEditComponent,
    EmployeeNotSelectedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DataTransport],
  bootstrap: [AppComponent]
})
export class AppModule { }
