import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add-container',
  templateUrl: './employee-add-container.component.html',
  styleUrls: ['./employee-add-container.component.css']
})
export class EmployeeAddContainerComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
  }

  employeeData(employeeForm : FormGroup){
    console.log(employeeForm);
    this.employeeService.addEmployees(employeeForm).subscribe(() => {
        this.router.navigate(['../employee'])
    });

    
  }

}
