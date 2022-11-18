import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu>
        <li class="nav-item" #backToTop>
          <a class="nav-link" href="#">Back to top</a>
        </li>
      </app-menu>
      <p>Copyright 2022 | Mukesh</p>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
