import { Component, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeAddPresenterService } from '../employee-add-presenter/employee-add-presenter.service';
import { EventEmitter } from '@angular/core';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-add-presentation',
  templateUrl: './employee-add-presentation.component.html',
  styleUrls: ['./employee-add-presentation.component.css']
})
export class EmployeeAddPresentationComponent implements OnInit {

  public employeeForm : FormGroup;
  private _employee: Employee;
  public isEditable : boolean = false;

  @Input() set employee(value : Employee){
    if(value){
      this._employee = value;
      this.setEmployeeDetails(value);
      this.isEditable = true;
    }
  }

  get employee(): Employee {
    console.log('Getter' + this._employee);
    return this._employee;
  }

  @Output() public employeeData : EventEmitter<any> = new EventEmitter();

  @Output() public editEmployeeData : EventEmitter<any> = new EventEmitter();


  

  constructor(private employeeAddPresenterService : EmployeeAddPresenterService) {
    this.employeeForm = this.employeeAddPresenterService.bindForm();
    this._employee =null
   }

  ngOnInit(): void {
    // this.employeeAddPresenterService.employee$.subscribe(
    //   (employee) => this.employeeData.emit(employee)
    // )

  }
  onSubmit(){
    if(!this.isEditable){
      this.employeeData.emit(this.employeeForm.value)
    }
    else{
      this.editEmployee();
    }
    // this.employeeAddPresenterService.employeeDetail(this.employeeForm);
  }
  reset(){
    this.employeeForm.reset();
  }

  setEmployeeDetails(value){
    console.log(value);
    this.employeeForm.reset(value);
  }

  editEmployee(){    
    this.editEmployeeData.emit(this.employeeForm.value)
  }
}
