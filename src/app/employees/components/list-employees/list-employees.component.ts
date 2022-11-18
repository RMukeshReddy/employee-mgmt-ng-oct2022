import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEmployee } from '../../models/iemployee';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit, OnDestroy {

  employees: IEmployee[] = [];
  employeesSubscription!: Subscription;

  constructor(
    private employeeService: EmployeeService, 
    private spinner: NgxSpinnerService 
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    console.log('Inside list employee ngOnInit');
    this.employeesSubscription = this.employeeService.getEmployees()
      .subscribe((res: IEmployee[]) => {
        console.log(res);
        this.employees = res;
        this.spinner.hide();
      })
  }

  ngOnDestroy(): void {
    // whenever the component goes out of the view -- this will be executed
    // ideal place for you to clear data, clear interval and timeout, unsubscribe
    console.log('Inside Destroy');
    // if(this.employees && this.employees.length > 0) {
    //   this.employees.length = 0;
    // }
    this.employeesSubscription.unsubscribe();
  }

}
