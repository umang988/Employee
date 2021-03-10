import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddContainerComponent } from './employee-add-container/employee-add-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeesComponent } from './employees.component';

const routes: Routes = [{ path: '', component: EmployeesComponent,
  children : [
    { path : '', component : EmployeeListContainerComponent },
    { path : 'add', component : EmployeeAddContainerComponent},
    { path : 'edit/:id', component : EmployeeAddContainerComponent}
  ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
