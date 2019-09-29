import { Employee } from '../model/employee.model';

export class EmployeeService {
    employeeList: Employee[] = [new Employee(112, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D'),
    new Employee(113, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D'),
    new Employee(114, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D'),
    new Employee(115, 'Nagesh', 'vashist', 'Male', new Date(), 'R&D'),
    new Employee(116, 'Nagesh', 'vashist', 'Female', new Date(), 'R&D')];
}