import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../../services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { ListEmployeesComponent } from './list-employees.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;
  let employeeService: EmployeeService;

  //steps for mocking

  //1. have the mock data of array with mn 2 objects
  //2. prepare for mocking a service's API method
  //  2.1 what service to mock? EmployeeService
  //  2.2 what API method to mock? getEmployee()
  //3. provide the mock data for the service request
  const mockEmployeeList = [{
    id: 1,
    name: 'Virat Kohli',
    email: 'v@k.com',
    phone: '1-770-736-803'
  }, {
    id: 2,
    name: 'Steve Smith',
    email: 's@s.com',
    phone: '010-692-6599'
  }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeesComponent ],
      imports: [ HttpClientModule ],
      providers: [
        {
          provide: EmployeeService,
          useValue: {
            // mocking getEmployees method to return mockEmployeeList data as observable
            getEmployees: () => of(mockEmployeeList)
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    // important as we dep inj this service in our component
    employeeService: TestBed.inject(EmployeeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  // Approach #2 using timeout -- checking ajax call's response
  it('has 10 employees initially', ((done) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.employees.length).toEqual(10);
      done();
    }, 4001);
  }));

  it('should render employee named "Leanne Graham"', ((done) => {
    component.ngOnInit();

    setTimeout(() => {
      fixture.detectChanges(); // after waiting for 4 sec, updates the html
      console.log('list-employees-component-spec', fixture.nativeElement.querySelector('h5'));
      expect(fixture.nativeElement.querySelector('h5').innerText).toBe('Leanne Graham');
      done();
    }, 4000);
  }));
  */

  /* Challenges / disadvantages of testing direct API request like the above
    1. Time Consuming
    2. Backend REST API might have data inconsistencies
    3. Backend might not be stable / may still be in development

    so, what's the solution? - mocks, spies
   */

  // testing the length of employees  
  it('should have array with length 2 in employees -- [MOCKING API]', () => {
    expect(component.employees.length).toEqual(2);
  });

  // testing the employees from service
  it('should have employees from service -- [MOCKING API]', () => {
    expect(component.employees).toEqual(mockEmployeeList);
  });

  // testing whether the name "Virat Kohli" is rendered or not
  it('should render employee named "Virat Kohli"', () => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h5').innerText).toBe('Virat Kohli');
  });

});
