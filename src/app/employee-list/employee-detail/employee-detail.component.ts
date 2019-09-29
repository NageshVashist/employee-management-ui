import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;
  id: number;
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.employee=this.employeeService.employeeList[0];
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.employee = this.employeeService.getEmployeebyId(this.id);
    });
  }
  onEdit(){
    this.router.navigate(["edit"],{relativeTo:this.route});
  }
  onDelete(){
    this.employeeService.deleteEmployee(this.employee);
  }
}
