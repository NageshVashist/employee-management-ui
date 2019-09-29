import { Employee } from '../model/employee.model';
import { Subject } from 'rxjs';

export class EmployeeService {
    employeeList: Employee[] = [new Employee(112, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(113, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(114, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D', 'https://publicdomainvectors.org/photos/female-user-icon.png'),
    new Employee(115, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D', 'http://res.publicdomainfiles.com/pdf_view/68/13927384215784.png'),
    new Employee(116, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D', 'https://publicdomainvectors.org/photos/female-user-icon.png')];

    employeeChanged = new Subject<Employee[]>();

    getEmployeebyId(id: number) {
        return this.employeeList.find(emp => emp.id == id);
    }

    deleteEmployee(employee: Employee) {
        this.employeeList = this.employeeList.filter(emp => emp != employee);
        this.employeeChanged.next(this.employeeList);
    }
    addNewEmployee(employee: Employee) {
        this.employeeList.push(employee);
        this.employeeChanged.next(this.employeeList);
    }
    editEmployee(employee: Employee) {
        for(let i=0;i<this.employeeList.length;i++){
            if(this.employeeList[i].id==employee.id){
                this.employeeList[i]=employee;
                break;
            }
        }
        this.employeeChanged.next(this.employeeList);
    }


}