import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <p>Let's send data to the parent component</p>
      <button (click)='handleSendDataToParent()'>Send Data to Parent Component</button>
    </div>
  `,
  styles: []
})

export class CebComponent implements OnInit {

  @Output() profileLoaded = new EventEmitter();

  profile = {
    name: 'Steve',
    city:'London'
  }

  constructor() { }

  ngOnInit(): void {}

  handleSendDataToParent(){
    console.log('Will send soon...');
    this.profileLoaded.emit(this.profile)
  }

}
