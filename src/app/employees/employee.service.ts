import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeService {

  public url : string = 'http://localhost:3000/Employee';
  public data : Observable<Employee>;

  constructor(private http : HttpClient, private router : Router) { }

  public getEmployees() : Observable<any>{
    return this.http.get(this.url);
  }

  public getEmployeesById(id : number) : Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  public addEmployees(data : any ) : Observable<any>{
    this.router.navigate(['employee']);
    return this.http.post(this.url,data)
  }

  public deleteEmployees(id : any ) : Observable<any>{
    return this.http.delete(this.url,id)
  }
  public editEmployees(data : any, id: any ) : Observable<any>{
    this.router.navigate(['employee']);
    return this.http.put(`${this.url}/${id}`,data)
  }
}
