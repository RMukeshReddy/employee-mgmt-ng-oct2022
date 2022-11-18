import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';
import { By } from '@angular/platform-browser';

import { ConceptsComponent } from '../components/concepts.component';
import { CebComponent } from './ceb/ceb.component';
import { CpbComponent } from './cpb/cpb.component';
import { ColorizerDirective } from '../directives/colorizer.directive';
import { DemoIfDirective } from '../directives/demo-if.directive';
import { UnlessDirective } from '../directives/unless.directive';

describe('ConceptsComponent', () => {
  let component: ConceptsComponent;
  let fixture: ComponentFixture<ConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ FormsModule ],
      declarations: [ 
        ConceptsComponent,
        CebComponent,
        CpbComponent,
        ColorizerDirective,
        DemoIfDirective,
        UnlessDirective,
        EllipsisPipe 
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*

  // Testing whether the <div> has background-color red or not
  it('should have a <div> with bgColor red', () => {
    const wrapper = fixture.nativeElement.querySelector('.colorizerDemo');
    // console.log(wrapper);
    const bgColor = wrapper.style.backgroundColor;
    // console.log(bgColor);
    expect(bgColor).toBe('red');
  });

  // Testing whether the <div> has text-color rgb(255, 255, 255) or not
  it('should have a <div> with textcolor rgb(255, 255, 255)', () => {
    const wrapper = fixture.nativeElement.querySelector('.colorizerDemo');
    const textColor = wrapper.style.color;
    expect(textColor).toBe('rgb(255, 255, 255)');
  });

  // Testing whether the <div> has height 100px or not
  it('should have a <div> with height 100px', () => {
    const wrapper = fixture.nativeElement.querySelector('.colorizerDemo');
    const divElHeight = wrapper.style.height;
    expect(divElHeight).toBe('100px');
  });

  // Testing whether the <div> has padding 20px or not
  it('should have a <div> with padding 20px', () => {
    const wrapper = fixture.nativeElement.querySelector('.colorizerDemo');
    const divElPadding = wrapper.style.padding;
    expect(divElPadding).toBe('20px');
  });

  // Testing whether the <p> has style float to right or not
  it('should have <p> with style float to right', () => {
    const wrapper = fixture.debugElement.query(By.css('.colorizerDemo'));
    const styleFloat = wrapper.nativeElement.querySelector('p').style.float;
    expect(styleFloat).toBe('right');
  });

  // Testing whether the <p> has font-size 10px or not
  it('should have <p> with font-size 10px', () => {
    const wrapper = fixture.debugElement.query(By.css('.colorizerDemo'));
    const paraFontSize = wrapper.nativeElement.querySelector('p').style.fontSize;
    expect(paraFontSize).toBe('10px');
  });

  // Testing whether the <p> has appropriate text or not
  it('should have <p> with text to be Powered By Colorizer Directive', () => {
    const wrapper = fixture.debugElement.query(By.css('.colorizerDemo'));
    const paraText = wrapper.nativeElement.querySelector('p').innerText;
    expect(paraText).toBe('Powered By Colorizer Directive');
  });

  // Testing whether the background-color of <div> has changed to yellow or not after clicking on <div>
  it('should have bgColor to yellow when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo')).nativeElement.click();

    const bgColorAfterClick = fixture.nativeElement.querySelector('.colorizerDemo').style.backgroundColor;
    expect(bgColorAfterClick).toBe('yellow');
  });

  // Testing whether the text-color of <div> has changed to rgb(0, 0, 0) or not after clicking on <div>
  it('should have a <div> with textColor rgb(0, 0, 0) when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo')).nativeElement.click();

    const textColorAfterClick = fixture.nativeElement.querySelector('.colorizerDemo').style.color;
    expect(textColorAfterClick).toBe('rgb(0, 0, 0)');
  });

  // Testing whether the <div> has border green or not after clicking on <div>
  it('should have a <div> with border green when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo')).nativeElement.click();

    fixture.detectChanges();

    const divElBorderAfterClick = fixture.nativeElement.querySelector('.colorizerDemo').style.border;
    expect(divElBorderAfterClick).toBe('5px solid green');
  });

  // Testing whether <span> is present inside <div> or not
  it('should have <span> inside <div> when clicked on <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo')).nativeElement.click();

    fixture.detectChanges();

    const divEl = fixture.nativeElement.querySelector('.colorizerDemo')
    const spanEl = divEl.querySelector('span');
    expect(spanEl).toBeTruthy();
  });

  // Testing whether the background-color is changing to rgb(144, 238, 144) after mouseover on <div>
  it('should change the bgColor to rgb(144, 238, 144) when mouseover on <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo'))
      .triggerEventHandler('mouseover', null);

    fixture.detectChanges();

    const bgColorAfterMouseover = fixture.nativeElement.querySelector('.colorizerDemo').style.backgroundColor;
    expect(bgColorAfterMouseover).toBe('rgb(144, 238, 144)');
  });

  // Testing whether the background-color is changing to red after mouseout of <div>
  it('should change the bgColor to red when mouseout of <div>', () => {
    fixture.debugElement.query(By.css('.colorizerDemo'))
      .triggerEventHandler('mouseout', null);

    const bgColorAfterMouseout = fixture.nativeElement.querySelector('.colorizerDemo').style.backgroundColor;
    expect(bgColorAfterMouseout).toBe('red');
  });

  */

});
