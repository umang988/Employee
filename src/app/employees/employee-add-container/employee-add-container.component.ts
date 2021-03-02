import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add-container',
  templateUrl: './employee-add-container.component.html',
  styleUrls: ['./employee-add-container.component.css']
})
export class EmployeeAddContainerComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  employeeData(employeeForm : FormGroup){
    console.log(employeeForm);
    
  }

}
