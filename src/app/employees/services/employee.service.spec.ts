import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  // setup spy
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(EmployeeService);
  });

  // setting up spy
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new EmployeeService(httpClientSpy);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return employees when called [HTTP SPY]', (done: DoneFn) => {
    // mock data for employees
    const mockEmployees = [{
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

    httpClientSpy.get.and.returnValue(of(mockEmployees));

    service.getEmployees()
      .subscribe({
        next: (res: any) => {
          expect(res).toEqual(mockEmployees);
          done();
        },
        error: done.fail
      })
  });

  it('should create employee using [HTTP SPY]', (done: DoneFn) => {
    const newEmployee = {
      name: 'Virat Kohli',
      email: 'v@k.com',
      phone: '1-770-736-803'
    };

    const mockResponse = {
      id: 1,
      name: 'Virat Kohli',
      email: 'v@k.com',
      phone: '1-770-736-803'
    };

    httpClientSpy.post.withArgs(environment.employeesRestApi, newEmployee).and.returnValue(of(mockResponse));

    service.createEmployee(newEmployee)
      .subscribe({
        next: (res: any) => {
          expect(res).toEqual(mockResponse);
          done();
        },
        error: done.fail
      })
  });
  
});
