import { Injectable, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAddPresenterService {

  employeeForm : FormGroup;

  constructor() { 
    this.employee$ = this.employee.asObservable();
  }

  public employee = new Subject<any>();
  public employee$ = new Observable<any>();

  public bindForm() : FormGroup{
     return new FormGroup({
    fullName : new FormControl(),
    email : new FormControl(),
    mobile : new FormControl(),
    city : new FormControl(),
    gender : new FormControl(),
    department : new FormControl(),
    hireDate : new FormControl(),
    // permanentEmployee : new FormControl()
  })
}

  public employeeDetail(employeeForm : FormGroup){
    console.log(employeeForm);
    this.employee.next(employeeForm.value);
  }
}
