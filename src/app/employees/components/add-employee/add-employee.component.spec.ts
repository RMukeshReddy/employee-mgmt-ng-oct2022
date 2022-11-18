import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { IEmployee } from '../../models/iemployee';

import { AddEmployeeComponent } from './add-employee.component';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let service: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AddEmployeeComponent 
      ],
      imports: [ 
        HttpClientModule, 
        RouterTestingModule, 
        ReactiveFormsModule, 
        ToastrModule.forRoot() 
      ],
      providers: [ 
        ToastrService,
        { provide: Router, useValue: routerSpy } 
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // positive state of the form
  it('has valid form when all fields are properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('9876543210');
    component.addEmployeeForm?.controls['email'].setValue('John@k.com');
    expect(component.addEmployeeForm.valid).toBeTrue();
  });

  // negative state of the form
  it('has invalid form when all fields are not properly filled', () => {
    component.addEmployeeForm?.controls['name'].setValue('');
    component.addEmployeeForm?.controls['phone'].setValue('');
    component.addEmployeeForm?.controls['email'].setValue('');
    expect(component.addEmployeeForm.invalid).toBeTrue();
  });

  // submission logic -- spyOn
  it('should call handleAddEmployee -- all through [TS]', () => {
    spyOn(component, 'handleAddEmployee');
    component.handleAddEmployee();
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // let's test the handleAddEmployee method by triggering the click on html button
  it('should call handleAddEmployee when the submit button clicked with all fields properly filled', () => {
    // enter valid input values only then, submit button will be enabled
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('9876543210');
    component.addEmployeeForm?.controls['email'].setValue('John@k.com');
    
    fixture.detectChanges();

    spyOn(component, 'handleAddEmployee'); // Install a spy on to an existing object
    const submitBtn = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    submitBtn.click(); // we can click only if button becomes enabled -- for that we need valid inputs
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // test spec for handling submit button through html
  it('should call handleAddEmployee when the submit button clicked -- all through [HTML]', () => {
    // find the input
    const nameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameInput');
    // set the values in input
    nameInput.value = 'John';
    // trigger the input event in all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '9123456780';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'John@k.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    spyOn(component, 'handleAddEmployee');
    const submitBtn = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    submitBtn.click(); 
    expect(component.handleAddEmployee).toHaveBeenCalled();
  });

  // test spec form with inputs that satisfy validation requirements
  it('has form with inputs that satisfy validation requirements', () => {
    // find the input
    const nameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameInput');
    // set the values in input
    nameInput.value = 'John';
    // trigger the input event in all input field
    nameInput.dispatchEvent(new Event('input'));

    const phoneInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value = '9123456780';
    phoneInput.dispatchEvent(new Event('input'));

    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value = 'John@k.com';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const nameRequiredEl = fixture.debugElement.nativeElement.querySelector('#nameRequired');
    expect(nameRequiredEl).toBeFalsy();

    const phoneRequiredEl = fixture.debugElement.nativeElement.querySelector('#phoneRequired');
    expect(phoneRequiredEl).toBeFalsy();

    const emailRequiredEl = fixture.debugElement.nativeElement.querySelector('#emailRequired');
    expect(emailRequiredEl).toBeFalsy();

    const invalidEmailEl = fixture.debugElement.nativeElement.querySelector('#invalidEmail');
    expect(invalidEmailEl).toBeFalsy();
  });

  // test spec for name without valid inputs
  it('should show error when invalid name is entered', () => {
    const nameInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#nameInput');
    nameInput.value='';
    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const nameRequiredEl = fixture.debugElement.nativeElement.querySelector('#nameRequired');
    expect(nameRequiredEl.innerText).toBe('Name is required');
  });

  // test spec for phone without valid inputs
  it('should show error when invalid phone is entered', () => {
    const phoneInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#phoneInput');
    phoneInput.value='';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phoneRequiredEl = fixture.debugElement.nativeElement.querySelector('#phoneRequired');
    expect(phoneRequiredEl.innerText).toBe('Phone is required');

    phoneInput.value='908765432112';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phoneMaximumNumbersEl = fixture.debugElement.nativeElement.querySelector('#phoneMaxlength');
    expect(phoneMaximumNumbersEl.innerText).toBe('Phone should have maximum 10 numbers');

    phoneInput.value='90abh#@89i';
    phoneInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const phonePatternEl = fixture.debugElement.nativeElement.querySelector('#phonePattern');
    expect(phonePatternEl.innerText).toBe('Please provide only numbers');
  });

  // test spec for email without valid inputs
  it('should show error when invalid email is entered', () => {
    const emailInput: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailInput');
    emailInput.value='';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const emailRequiredEl = fixture.debugElement.nativeElement.querySelector('#emailRequired');
    expect(emailRequiredEl.innerText).toBe('Email is required');

    emailInput.value='john@';
    emailInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const invalidEmailEl = fixture.debugElement.nativeElement.querySelector('#invalidEmail');
    expect(invalidEmailEl.innerText).toBe('Email seems to be not valid');
  });

  // testing whether the click on back button is taking to "list-employees-page" or not
  it('has to navigate to "list-employees-page" on back button click', () => {
    component.handleGoBack();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/employees']);
  });

  // testing the form data with mockdata
  it('testing the form data with mockdata using spy', (done: DoneFn) => {
    component.addEmployeeForm?.controls['name'].setValue('John');
    component.addEmployeeForm?.controls['phone'].setValue('9876543210');
    component.addEmployeeForm?.controls['email'].setValue('John@k.com');
    
    fixture.detectChanges();

    spyOn(component, 'handleAddEmployee').and.callThrough(); // Install a spy on to an existing object
    // const submitBtn = fixture.debugElement.query(By.css('.submitBtn')).nativeElement;
    // submitBtn.click(); // we can click only if button becomes enabled -- for that we need valid inputs
    component.handleAddEmployee();
    expect(component.handleAddEmployee).toHaveBeenCalled();

    const mockResponse: IEmployee = {
      id: 1,
      name: 'John',
      phone: '9876543210',
      email: 'John@k.com'
    }
    
    spyOn(component.employeeService, 'createEmployee')
      .withArgs(component.addEmployeeForm.value).and.returnValue(of(mockResponse))
    component.employeeService.createEmployee(component.addEmployeeForm.value)
      .subscribe({
        next: (res) => {
          expect(res).toEqual(mockResponse);
          done();
        },
        error: () => {
          console.log('SOME ERROR OCCURED');
          done();
        }
      })
  });

  // testing whether the error is returned or not when the wrong employee details are sent
  it('should return error when wrong employee details are sent', () => {
    component.addEmployeeForm?.controls['name'].setValue('');
    component.addEmployeeForm?.controls['phone'].setValue('');
    component.addEmployeeForm?.controls['email'].setValue('');

    fixture.detectChanges();

    spyOn(component.employeeService, 'createEmployee')
      .withArgs(component.addEmployeeForm.value).and.throwError('Invalid data');
    console.log('add employee spec', component.addEmployeeForm.value)
    expect(function () {
      component.employeeService.createEmployee(component.addEmployeeForm.value)
    }).toThrow(new Error('Invalid data'))
  });

});
