import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  template: `
    <h2>
      My Calculator | Add Function
    </h2>
  `,
  styles: []
})

export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  add(num1: number, num2: number): number {
    return num1 + num2;
  }

}
