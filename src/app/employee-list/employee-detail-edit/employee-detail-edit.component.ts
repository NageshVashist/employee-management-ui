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
  editMode: boolean;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.employee = this.employeeService.getEmployeebyId(id);

    this.route.params.subscribe((param: Params) => {
      id = +param['id'];
      this.editMode = param['id'] != null;
      this.employee = this.employeeService.getEmployeebyId(id);
    });
    this.initForm();
  }
  initForm() {
    let id: number = 0;
    let firstName: string = '';
    let lastName: string = '';
    let gender: string = '';
    let department: string = '';
    let imagePath: string = '';
    let dateOfBirth:Date=new Date();
    if (this.editMode) {
      id = this.employee.id;
      firstName = this.employee.firstName;
      lastName = this.employee.lastName;
      gender = this.employee.gender;
      department = this.employee.department;
      imagePath = this.employee.imagePath;
      dateOfBirth=this.employee.dateOfBirth;
    }
    this.employeeForm = new FormGroup({
      'id': new FormControl(id),
      'firstName': new FormControl(firstName),
      'lastName': new FormControl(lastName),
      'gender': new FormControl(gender),
      'department': new FormControl(department),
      'imagePath': new FormControl(imagePath),
      'dateOfBirth':new FormControl(dateOfBirth)
    });
  }
  onSubmit() {
    if (this.editMode) {

      this.employeeService.editEmployee(this.employeeForm.value);
    }
    else {
      this.employeeService.addNewEmployee(this.employeeForm.value);
    }

    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
