import { Employee } from '../model/employee.model';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { DataTransport } from './data.transport';
@Injectable()
export class EmployeeService {


    constructor(private dataService: DataTransport) {
        this.getEmployees();
    }

    employeeList: Employee[] = [new Employee(112, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(113, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(114, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D', 'https://publicdomainvectors.org/photos/female-user-icon.png'),
    new Employee(115, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(116, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D', 'https://publicdomainvectors.org/photos/female-user-icon.png')];

    employeeChanged = new Subject<Employee[]>();

    getEmployeebyId(id: number) {
        return this.employeeList.find(emp => emp.id == id);
    }

    getEmployees() {
        this.dataService.getEmployees().subscribe((list: Employee[]) => {
            this.employeeList = list;
            this.employeeChanged.next(this.employeeList);
        });
    }
    
    deleteEmployee(employee: Employee) {
        this.dataService.deleteEmployee(employee).subscribe((res: {}) => {

            this.employeeList = this.employeeList.filter(emp => emp != employee);
            this.employeeChanged.next(this.employeeList);
        });
    }

    addNewEmployee(employee: Employee) {
        this.dataService.addEmployee(employee).subscribe((res: Response) => {

            this.employeeList.push(employee);
            this.employeeChanged.next(this.employeeList);
        });
    }
    editEmployee(employee: Employee) {
        this.dataService.updateEmployee(employee).subscribe((res: {}) => {

            for (let i = 0; i < this.employeeList.length; i++) {
                if (this.employeeList[i].id == employee.id) {
                    this.employeeList[i] = employee;
                    break;
                }
            }
            this.employeeChanged.next(this.employeeList);
        });
    }


}