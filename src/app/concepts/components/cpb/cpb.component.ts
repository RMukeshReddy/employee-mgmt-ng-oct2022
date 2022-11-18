import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  template: `
    <div>
      Parent to Child Component
      <p>My Age: {{ age }}</p>
    </div>
  `,
  styles: []
})

export class CpbComponent implements OnInit {

  // Step 1: Let's have a variable
  @Input() age = 50; // Step 2: Use it with input decorator
  // Step 3: Assigning the value by using custom property binding in parent component

  constructor() { }

  ngOnInit(): void {
  }

}
