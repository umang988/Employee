import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html',
  styleUrls: ['./employee-list-container.component.css']
})
export class EmployeeListContainerComponent implements OnInit {

  employees$ : Observable<Employee[]>;

  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getData();
  }

  public getData() {
    this.employees$ = this.employeeService.getEmployees()
  }
}
