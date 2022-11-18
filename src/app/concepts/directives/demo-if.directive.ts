import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<object>
  ) {
    console.log('Inside DemoIf Directive Constructor');
    console.log(this.viewContainerRef); // div
    console.log(this.templateRef); // p
    // const isAuth = false;

    // if(isAuth){
    //   this.viewContainerRef.createEmbeddedView(this.templateRef);
    // }
    // else{
    //   this.viewContainerRef.clear();
    // }
  }

  @Input() set appDemoIf(condition: boolean) {
    console.log(condition);
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
