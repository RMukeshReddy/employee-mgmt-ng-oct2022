import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

// Decorator
@Injectable({
  providedIn: 'root' // This tells Angular to provide the service in the application root level 
  // and the service will be created once (singleton service ) and 
  // provide the same instance in every module that injects this class.
})
export class EmployeeService {

  constructor( private http: HttpClient ) { }

  // create employee
  createEmployee(formData: any) { // 1. get the form data from component
    console.log(formData);

    // 2. send the form data to the REST API
    // 2.1 what's the REST API URL?
    // 2.2 what's the Http method> POST
    // 2.3 what's the REST API Client Tool? HttpClient
    return this.http.post(environment.employeesRestApi, formData)
      .pipe(map((res: any) => { // 3. get the response from the REST API
        console.log(res);
        // 4. send the response to the component
        return res;
      }));   
  }

  // list employees
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(environment.employeesRestApi)
      .pipe(map((res: IEmployee[]) => {
        console.log(res);
        return res;
      }));
  }

  // get employee
  getEmployeeById(empId: string | null) {
    console.log('Will load data for ' + empId);
    const restApiUrl = `${environment.employeesRestApi}/${empId}`;
    return this.http.get(restApiUrl)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // update employee details
  updateEmployee(employeeDetails: any) {
    const restApiUrl = `${environment.employeesRestApi}/${employeeDetails.id}`;
    return this.http.put(restApiUrl, employeeDetails)
      .pipe(map((res: any) => { 
        console.log('updateEmployeeDetails', res);
        return res;
      }));  
  }

  // delete employee
  deleteEmployee(employeeId: any) {
    const restApiUrl = `${environment.employeesRestApi}/${employeeId}`;
    return this.http.delete(restApiUrl)
      .pipe(map((res: any) => { 
        console.log('Delete Employee', res)
        return res;
      })); 
  }

}
