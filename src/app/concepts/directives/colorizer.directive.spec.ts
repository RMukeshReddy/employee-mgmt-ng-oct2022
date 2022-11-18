import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorizerDirective } from './colorizer.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <div class='div1' appColorizer>Testing Colorizer Directive with Mock Component</div>
  `
})
class MockComponent { }  // No need to export as we will use this component her itself
describe('ColorizerDirective', () => {
  let fixture: ComponentFixture<MockComponent>;
  let colorizerDirectiveElements: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        ColorizerDirective
      ]
    }).createComponent(MockComponent);

    fixture.detectChanges();  // detecting the changes in html of MockComponent
    colorizerDirectiveElements = fixture.debugElement.queryAll(By.directive(ColorizerDirective));
  });

  // Testing whether the div has background color red or not
  it('should have a <div> with bgcolor red', () => {
    const wrapper = fixture.nativeElement.querySelector('.div1');
    // console.log(wrapper);
    const bgColor = wrapper.style.backgroundColor;
    // console.log(bgColor);
    expect(bgColor).toBe('red');
  });

  // testing whether the div has textcolor rgb(255, 255, 255) or not
  it('should have a <div> with textcolor rgb(255, 255, 255)', () => {
    const wrapper = fixture.nativeElement.querySelector('.div1');
    const textColor = wrapper.style.color;
    expect(textColor).toBe('rgb(255, 255, 255)');
  });

  // Testing whether the div has height 100px or not
  it('should have a <div> with height 100px', () => {
    const wrapper = fixture.nativeElement.querySelector('.div1');
    const height = wrapper.style.height;
    expect(height).toBe('100px');
  });
  
  // Testing whether the div has width 20px or not
  it('should have a <div> with padding 20px', () => {
    const wrapper = fixture.nativeElement.querySelector('.div1');
    const padding = wrapper.style.padding;
    expect(padding).toBe('20px');
  });

  // Testing whether the paragraph has style float to right or not
  it('should have a <p> with style float to right', () => {
    const wrapper = fixture.nativeElement.querySelector('p');
    const styleFloat = wrapper.style.float;
    expect(styleFloat).toBe('right');
  });

  // Testing whether the paragraph has font-size 10px or not
  it('should have a <p> with font-size 10px', () => {
    const wrapper = fixture.nativeElement.querySelector('p');
    const paraFontSize = wrapper.style.fontSize;
    expect(paraFontSize).toBe('10px');
  });

  // Testing whether the paragraph has the appropriate text or not
  it('should have a <p> with text to be Powered By Colorizer Directive', () => {
    const wrapper = fixture.nativeElement.querySelector('p');
    const paraText = wrapper.innerText;
    expect(paraText).toBe('Powered By Colorizer Directive')
  });

  // Testing whether the background-color of <div> has changed to yellow or not after clicking on <div>
  it('should have bgColor to yellow when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.div1')).nativeElement.click();

    fixture.detectChanges();

    const bgColor = fixture.nativeElement.querySelector('.div1').style.backgroundColor;
    expect(bgColor).toBe('yellow');
  });

  // Testing whether the text-color of <div> has changed to rgb(0, 0, 0) or not after clicking on <div>
  it('should have a <div> with textColor rgb(0, 0, 0) when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.div1')).nativeElement.click();

    fixture.detectChanges();

    const color = fixture.nativeElement.querySelector('.div1').style.color;
    expect(color).toBe('rgb(0, 0, 0)');
  });

  // Testing whether the <div> has border green or not after clicking on <div>
  it('should have a <div> with border green when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.div1')).nativeElement.click();

    fixture.detectChanges();

    const border = fixture.nativeElement.querySelector('.div1').style.border;
    expect(border).toBe('5px solid green');
  });

  // Testing whether <span> is present inside <div> or not
  it('should have <span> inside <div> when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.div1')).nativeElement.click();

    fixture.detectChanges();

    const divEl = fixture.nativeElement.querySelector('.div1');
    const spanEl = divEl.querySelector('span');
    expect(spanEl).toBeTruthy();
  });

  // Testing whether the background-color is changing to rgb(144, 238, 144) after mouseover on <div>
  it('should change the bgColor to rgb(144, 238, 144) when mouseover on <div>', () => {
    fixture.debugElement.query(By.css('.div1'))
      .triggerEventHandler('mouseover', null);
      
    fixture.detectChanges();

    const bgColor = fixture.nativeElement.querySelector('.div1').style.backgroundColor;
    expect(bgColor).toBe('rgb(144, 238, 144)');
  });

  // Testing whether the background-color is changing to red after mouseout of <div>
  it('should change the bgColor to red when mouseout of <div>', () => {
    fixture.debugElement.query(By.css('.div1'))
      .triggerEventHandler('mouseout', null);

    fixture.detectChanges();
    
    const bgColor = fixture.nativeElement.querySelector('.div1').style.backgroundColor;
    expect(bgColor).toBe('red');
  });

  //  Testing the colorizer element to be one
  it('should have one colorizer element', () => {
    expect(colorizerDirectiveElements.length).toBe(1);
  });
});
