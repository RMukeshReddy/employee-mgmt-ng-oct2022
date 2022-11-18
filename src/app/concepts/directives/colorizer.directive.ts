import { Directive, ElementRef, HostListener, HostBinding, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // Attribute Selector
})

export class ColorizerDirective {

  divEl: any;
  @HostBinding('style.border') border!: string;

  constructor(
    private elRef: ElementRef, 
    private renderer: Renderer2 
  ) { //Creating reference for classes 

    //find an element in which the directive is used
    // console.log(elRef.nativeElement);
    this.divEl = elRef.nativeElement;

    //pass the special instruction to the element using JS
    // divEl.style.backgroundColor = 'red';
    // divEl.style.color = '#fff';
    // divEl.style.height = '100px';
    // divEl.style.padding = '20px';

    //pass the special instruction to the element using Angular renderer
    renderer.setStyle(this.divEl, 'background-color', 'red');
    renderer.setStyle(this.divEl, 'color', '#fff');
    renderer.setStyle(this.divEl, 'height', '100px');
    renderer.setStyle(this.divEl, 'padding', '20px');

    const newPara = this.renderer.createElement('p'); // <p></p>
    renderer.setStyle(newPara, 'float', 'right'); // <p style='float:left'></p>
    renderer.setStyle(newPara, 'font-size', '10px'); // <p style='float:left', font-size:10px></p>
    const poweredByText = this.renderer.createText('Powered By Colorizer Directive');
    renderer.appendChild(newPara, poweredByText); // <p style='float:left', font-size:10px>Powered By Colorizer Directive</p>
    renderer.appendChild(this.divEl, newPara);
  }

  // Handle Events inside Directive - click, mouseover, mouseout
  @HostListener('click', ['$event.target'])
  handleClick(targetEl: any) {    
    console.log('Clicked');
    console.log(targetEl); //will show on which element the click event occured
    this.renderer.setStyle(targetEl, 'background-color', 'yellow');
    this.renderer.setStyle(targetEl, 'color', '#000');
    this.border = '5px solid green';

    const newSpan = this.renderer.createElement('span');
    this.renderer.setStyle(newSpan, 'font-size', '12px');
    const developedByText = this.renderer.createText('Developed by Mukesh');
    this.renderer.appendChild(newSpan, developedByText);
    this.renderer.appendChild(this.divEl, newSpan);
  }

  //TODO: mouseover - change the background-color to lightgreen
  @HostListener('mouseover')
  handleMouseOver() {
    console.log('mouseover');
    console.log(this.divEl); //will show on which element the click event occured
    this.renderer.setStyle(this.divEl, 'background-color', '#90EE90');
  }

  //TODO: mouseout - change the background-color to red
  @HostListener('mouseout')
  handleMouseOut() {
    console.log('mouseout');
    console.log(this.divEl); //will show on which element the click event occured
    this.renderer.setStyle(this.divEl, 'background-color', 'red');
  }
}
