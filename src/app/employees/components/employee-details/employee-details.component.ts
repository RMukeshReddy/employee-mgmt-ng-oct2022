import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employee: any;
  duplicateEmployee: any;
  updatedProfile: any;
  
  constructor( 
    private route: ActivatedRoute,
    public employeeService: EmployeeService, 
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router  
  ) {
    spinner.show()
  }

  ngOnInit(): void {
    // Reading URL Param
    // getting the id from the url params
    const empId: string | null = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(empId)
      .subscribe((res: any) => {
        console.log(res);
        this.employee = res;
        this.spinner.hide();
      })
  }

  handleEditModalOpen() {
    this.duplicateEmployee = { ...this.employee }; // shallow copy
  }

  handleUpdateEmployee(updateEmployeeForm: any) { // submission handler
    // console.log(this.duplicateEmployee); // submittable data
    console.log(updateEmployeeForm);
    this.employeeService.updateEmployee(this.duplicateEmployee)
      .subscribe( (res: any) => { 
        console.log('handleUpdateEmployee', res);
        if(res && res.id) {
          this.employee = res;
          this.toastr.success('Updated successfully');
        }
      });
  }

  handleDeleteEmployee() {
    this.employeeService.deleteEmployee(this.employee.id)
      .subscribe( (res: any) => {
        this.toastr.success('Deleted successfully');
        this.router.navigateByUrl('/employees');
      });
  }

}
