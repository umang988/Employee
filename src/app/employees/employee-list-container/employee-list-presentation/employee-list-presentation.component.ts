import { Component, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../employee.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  styleUrls: ['./employee-list-presentation.component.css']
})
export class EmployeeListPresentationComponent implements OnInit {

  p : number = 1;

  constructor() { }

  @Input() employees : Employee;

  @Output() removeEmployee : EventEmitter = new EventEmitter()

  ngOnInit(): void {
  }

  deleteEmployee($event){
  }

}
