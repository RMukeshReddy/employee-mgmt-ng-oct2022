import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

// 1. create a mock component with appHighlight in its html
@Component({
  template: `
  <div id='myDiv1' appHighlight='yellow'>Testing Directive with Mock Comp -- yellow color</div>
  <div id='myDiv2' appHighlight='skyblue'>Testing Directive with Mock Comp -- skyblue color</div>
  <div id='myDiv3' appHighlight>Testing Directive with Mock Comp -- grey color</div> 
  <div id='myDiv4'>Testing Directive with Mock Comp -- no color</div>
  <input type='text' #box [appHighlight]='box.value' value='cyan'>
  `
})
class MockComponent { } // No need to export as we will use this component here itself

// 2. test whether the div in the above mock component is getting bg color
describe('HighlightDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let hightlightDirectiveElements: DebugElement[];
  let bareDiv: DebugElement;
  
  // 2.1 preparing MockComponent for testing - loading it into the TestBed
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        HighlightDirective
      ]
    }).createComponent(MockComponent);

    fixture.detectChanges(); // detcting the changes in html of MockComponent
    hightlightDirectiveElements = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    bareDiv = fixture.debugElement.query(By.css('div:not([appHighlight])'));

  });

  // 2.2 let's test whether div of MockComponent has yellow bgcolor or not
  it('should have a <div> with bg color yellow', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv1');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  // testing whether the div with id=myDiv2 has bg color skyblue or not
  it('should have a <div> with bg color skyblue', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv2');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  // testing whether the div with id=myDiv3 has bg color lightgrey or not
  it('should have a <div> with bg color lightgrey', () => {
    const highlightWrapperEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv3');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('rgb(211, 211, 211)');
  });

  // testing the div with id=myDiv4 with no bgcolor
  it('should have a <div> with no bg color', () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('#myDiv4');
    const bgColor = divEl.style.backgroundColor;
    expect(bgColor).toBe('');
  });

  // all elements with an attached HighlightDirective
  it('should have four highlighted elements', () => {
    expect(hightlightDirectiveElements.length).toBe(4);
  });

  // testing whether the input has green color or not
  it('should have green color for <input>', () => {
    let inputEl = hightlightDirectiveElements[3].nativeElement as HTMLInputElement;
    console.log(inputEl)
    expect(inputEl.style.backgroundColor)
      .withContext('initial backgroundColor')
      .toBe('cyan');

    inputEl.value = 'green';

    // Dispatch a DOM event so that Angular responds to the input value change.
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputEl.style.backgroundColor)
      .withContext('changed backgroundColor')
      .toBe('green');
  });

  // testing div with no customProperty
  it('bare <div> should not have a customProperty', () => {
    expect(bareDiv.properties['customProperty']).toBeUndefined();
  });
  
});

