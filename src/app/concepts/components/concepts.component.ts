import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})

export class ConceptsComponent implements OnInit, AfterViewInit {

  //public variable
  //Interpolation related data
  appName = 'Employee Management App';
  companyProfile = {
    name: 'Cognizant',
    employeesCount: 30000 
  }

  //Property binding related
  teamSize = 14;

  //Two-way binding related
  courseName = 'Angular 12';
  
  //Custom Property binding related
  myAge = 37;

  //Custom Event binding related
  dataAccessedFromChild = '';
  dataReceivedFromChildComponent: any;

  //for directives
  isLoggedIn = true;
  skills = ['HTML', 'CSS', 'JS', 'ng', 'NodeJS'];
  weekDay = '0';
  
  // pipes related
  dummyText = 'Thanks for joining the session. Warm Welcome! Today, we are going to discuss on the pipes.'
  today: Date = new Date();

  //viewchild related
  @ViewChild(CebComponent, { static: false }) cebData!: CebComponent;

  constructor( private cd: ChangeDetectorRef ) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.cebData);
    this.dataAccessedFromChild = this.cebData.profile.city;
    this.cd.detectChanges();
  }

  //Event binding related
  handleClickMe(element: any){
    //TODO: Disable the button after click
    element.disabled = true;
    //TODO: Change the text to clicked
    element.innerText = 'Clicked';
  }

  //Custom Event binding related
  handleProfileLoaded(event: any){
    console.log(event)
    this.dataReceivedFromChildComponent = event;
  }

}
