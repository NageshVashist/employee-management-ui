import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee-detail-edit',
  templateUrl: './employee-detail-edit.component.html',
  styleUrls: ['./employee-detail-edit.component.css']
})
export class EmployeeDetailEditComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeebyId(id);

    this.route.params.subscribe((param: Params) => {
      id = +param['id'];
      this.employee = this.employeeService.getEmployeebyId(id);
    });
    this.initForm();
  }
  initForm() {
    let id: number = this.employee.id;
    let firstName: string = this.employee.firstName;
    let lastName: string = this.employee.lastName;
    let gender: string = this.employee.gender;
    let department: string = this.employee.department;
    let imagePath: string = this.employee.imagePath;
    this.employeeForm = new FormGroup({
      'id': new FormControl(id),
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'gender': new FormControl(gender),
      'department': new FormControl(department),
      'imagePath': new FormControl(imagePath)
    });
  }
  onSubmit() {
    this.employeeService.editEmployee(this.employeeForm.value);

    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
