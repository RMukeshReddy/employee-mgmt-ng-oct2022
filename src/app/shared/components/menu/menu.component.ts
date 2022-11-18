import { Component, AfterContentInit, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit, AfterContentInit {

  // only footer is sending an element with elementRef #backToTop
  @ContentChild('backToTop') b2tElement!: ElementRef;
  menuItems = [
    {
      routerLink: '/', 
      name: 'Home',
      routerLinkValue: true 
    },
    { 
      routerLink: '/concepts', 
      name: 'Concepts',
      routerLinkValue: false 
    },
    { 
      routerLink: '/about', 
      name: 'About',
      routerLinkValue: false 
    },
    { 
      routerLink: '/employees', 
      name: 'Employee Management App',
      routerLinkValue: false
    },
    { 
      routerLink: '/unit-testing', 
      name: 'Unit Testing',
      routerLinkValue: false
    },
    { 
      routerLink: '/products', 
      name: 'Products',
      routerLinkValue: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    // you will get undefined if such elRef is not sent from parent component
    // we will see undefined  once because header comp does not send the elRef #backToTop
    console.log(this.b2tElement);
    if(this.b2tElement) {
      this.b2tElement.nativeElement.style.backgroundColor = '#dedede';
    }
  }
}
