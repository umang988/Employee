import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-add-container',
  templateUrl: './employee-add-container.component.html',
  styleUrls: ['./employee-add-container.component.css']
})
export class EmployeeAddContainerComponent implements OnInit {

  public employee$ : Observable<Employee>;
  isEditable : boolean = false;
  editId : number;

  constructor(private formBuilder : FormBuilder,private employeeService : EmployeeService, private router : Router, private route : ActivatedRoute) {
    const id = route.snapshot.paramMap.get('id');
    this.editId = +id;
    if(id){
      this.getEmployee(+id);
      this.isEditable = true;
    }
   }

  ngOnInit(): void {
  }

  employeeData(employeeForm : FormGroup){
    console.log(employeeForm);

    
      this.employeeService.addEmployees(employeeForm).subscribe(() => {
        // this.router.navigate(['../employee'])
      });  

    
  }

  editEmployeeData(employeeForm){
    this.employeeService.editEmployees(employeeForm,this.editId)
  }

  getEmployee(id){
    this.employee$ = this.employeeService.getEmployeesById(id);
    console.log(this.employee$)
  }

}
