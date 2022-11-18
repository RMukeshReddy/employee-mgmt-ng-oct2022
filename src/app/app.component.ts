import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { slideInAnimation } from './shared/animations/animations';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root', //mandatory -> Element selector
  templateUrl: './app.component.html', //mandatory
  styleUrls: ['./app.component.css'], //optional and can have many
  //encapsulation: ViewEncapsulation.Emulated
  animations: [
    slideInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Employee Manager App';

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {
    // navigation event gets triggered when navigation ends successfully
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);
        rt.data.subscribe((data: any) => { // subscribing the data from getChild method
          console.log(data);
          this.titleService.setTitle(data.title); // setting the title using inbuilld titleService
        });
      });
  }

  // setTitle related
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
  
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
