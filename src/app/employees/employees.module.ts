import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeAddContainerComponent } from './employee-add-container/employee-add-container.component';
import { HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './employee.service';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeAddPresentationComponent } from './employee-add-container/employee-add-presentation/employee-add-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [EmployeesComponent, EmployeeListContainerComponent, EmployeeAddContainerComponent, EmployeeListPresentationComponent, EmployeeAddPresentationComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDatepickerModule
    
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeesModule { }
