import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css']
})
export class EmployeeListPresentationComponent implements OnInit {

  p : number = 1;

  constructor() { }

  @Input() employees : Employee;

  ngOnInit(): void {
  }

}
