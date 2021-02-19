import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-employee-add-presentation',
  templateUrl: './employee-add-presentation.component.html',
  styleUrls: ['./employee-add-presentation.component.css']
})
export class EmployeeAddPresentationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  employeeForm : FormGroup = this.formBuilder.group({
    fullName : [null,[Validators.required, Validators.pattern('[A-Za-z ]{1,32}')]],
    email : [null, Validators.required],
    mobile : [null,Validators.maxLength(10)],
    city : [null,Validators.required],
    gender : [null,Validators.required],
    department : [null,Validators.required],
    hireDate : [null,Validators.required],
    permanentEmployee : [null]
  })

  onSubmit(){
    console.log(this.employeeForm.value);
  }
  reset(){
    this.employeeForm.reset();
  }
}
