import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // step 1: Have the form tag equivalent in TS
  addEmployeeForm!: FormGroup;
  
  constructor( 
    public employeeService: EmployeeService,  
    private toastr: ToastrService, 
    private router: Router 
  ) { } // 1. connect with service

  ngOnInit(): void {
    // step 1 continues
    this.addEmployeeForm = new FormGroup({
      // step 2: Have the input tags equivalent in TS
      name: new FormControl('', Validators.required), // step 5: let's work on validation
      phone: new FormControl('', [
        Validators.required, 
        Validators.maxLength(10), 
        Validators.pattern('^[0-9]*$')
      ]), // step 6: refer html
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]) // can add multiple validators
    });
  }

  handleAddEmployee() {
    console.log(this.addEmployeeForm);
    // form data
    console.log(this.addEmployeeForm.value)

    // 2. send the above form data to the service
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe( (res: any) => {  // 3. get the response from service
        console.log(res);
        if(res && res.id) {
          this.toastr.success('Created Successfully');
          this.addEmployeeForm.reset();
        }
      });
  }

  handleGoBack(){
    this.router.navigate(['/employees']);
  }

}
