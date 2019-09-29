import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employeeList:Employee[]=[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeList=this.employeeService.employeeList;
  }

}
