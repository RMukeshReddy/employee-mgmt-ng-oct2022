import { Component, NgZone, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css'
  ],
  animations: [
    trigger('openClose', [
      // animation triggers go here
      // styles applied when the box is opened
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      // styles applied when the box is closed
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      // transition applied when the state is from open to close
      transition('open => closed', [
        animate('1s')
      ]),
      // transition applied when the state is from close to open
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})

export class AboutComponent implements OnInit {

  featureName = 'About Us';
  isOpen = true;
  progress: number = 0;
  label!: string;

  constructor( private _ngZone: NgZone ) { }

  ngOnInit(): void {}

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this._ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);
    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }

  // method related to animations
  toggle() {
    // changes the state from one to other
    this.isOpen = !this.isOpen;
  }

}
