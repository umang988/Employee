import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  public url : string = 'http://localhost:3000/Employee';
  public data : Observable<Employee>;

  constructor(private http : HttpClient) { }

  public getEmployees() : Observable<any>{
    return this.http.get(this.url);
  }

  public addEmployees(data : any ) : Observable<any>{
    return this.http.post('http://localhost:3000/Employee',data)
  }

  public deleteEmployees(id : any ) : Observable<any>{
    return this.http.delete('http://localhost:3000/Employee',id)
  }
}
