import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable()
export class DataTransport {
    constructor(private http: HttpClient) { }

    headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");


    getEmployees() {
        return this.http.get('http://localhost:8080/employees');
    }
    addEmployee(employee:Employee){
        return this.http.post('http://localhost:8080/employees/',employee);
    }
    updateEmployee(employee:Employee){
        return this.http.put('http://localhost:8080/employees/'+employee.id,employee);
    }
    deleteEmployee(employee:Employee){
        return this.http.delete('http://localhost:8080/employees/'+employee.id);
    }

}