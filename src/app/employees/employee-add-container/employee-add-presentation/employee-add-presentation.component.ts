import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { EmployeeAddPresenterService } from '../employee-add-presenter/employee-add-presenter.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add-presentation',
  templateUrl: './employee-add-presentation.component.html',
  styleUrls: ['./employee-add-presentation.component.css']
})
export class EmployeeAddPresentationComponent implements OnInit {

  public employeeForm : FormGroup;

  @Output() public employeeData : EventEmitter<any> = new EventEmitter();

  constructor(private employeeAddPresenterService : EmployeeAddPresenterService) {
    this.employeeAddPresenterService.bindForm();
   }

  ngOnInit(): void {
    this.employeeAddPresenterService.employee$.subscribe(
      (employee) => this.employeeData.emit(employee)
    )

  }

  

  onSubmit(){
    this.employeeAddPresenterService.employeeDetail(this.employeeForm);
  }
  reset(){
    this.employeeForm.reset();
  }
}
