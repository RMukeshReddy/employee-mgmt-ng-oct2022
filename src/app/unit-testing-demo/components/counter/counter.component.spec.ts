import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let wrapper: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    wrapper = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have counter value bydefault to 0', () => {
    expect(component.counterValue).toEqual(0);
  });

  it('should increment the value correctly', () => {
    component.counterValue = 9
    expect(component.counterValue).toEqual(9);
    component.handleIncrement();
    expect(component.counterValue).toEqual(10);
    component.handleIncrement();
    component.handleIncrement();
    expect(component.counterValue).toEqual(10);
  });

  it('should decrement the value correctly', () => {
    component.counterValue = 2;
    expect(component.counterValue).toEqual(2);
    component.handleDecrement();
    expect(component.counterValue).toEqual(1);
    component.handleDecrement();
    component.handleDecrement();
    expect(component.counterValue).toEqual(0);
  });

  // Testing of events
  it('should increment counter and update in html when increment button is clicked', () => {
    // find the button from html template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.incrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(1);

    fixture.detectChanges(); // detect the changes in html

    // along with it, let's check whether it is updated in html
    // const counterCompHTML = fixture.nativeElement as HTMLElement;
    //expect.(counterCompHTML.querySelector('p.counterTxt')?.textContent).toBe('Counter: 1')
    const counterHtmlText = fixture.debugElement
      .query(By.css('p.counterTxt'))
      .nativeElement.innerText;

    expect(counterHtmlText).toBe('Counter: 1');
  });

  it('should decrement counter and update in html when decrement button is clicked', () => {
    // find the button from html template and trigger/emit the click event
    fixture.debugElement
      .query(By.css('.decrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(0);

    fixture.detectChanges(); // detect the changes in html

    // along with it, let's check whether it is updated in html
    const counterHtmlText = fixture.debugElement
      .query(By.css('p.counterTxt'))
      .nativeElement.innerText;

    expect(counterHtmlText).toBe('Counter: 0');
  });

  it('should increment counter till 10 and update in html as Maxmimum Reached', () => {
    component.counterValue = 10;
    fixture.debugElement
      .query(By.css('.incrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(10);

    fixture.detectChanges();

    const counterMessage = fixture.debugElement
      .query(By.css('p.counterMsg'))
      .nativeElement.innerText;

    expect(counterMessage).toBe('Maximum Reached');
  });

  it('should decrement counter till 0 and update in html as Minimum Reached', () => {
    component.counterValue = 0;
    fixture.debugElement
      .query(By.css('.decrementBtn'))
      .triggerEventHandler('click', null);
    expect(component.counterValue).toEqual(0);

    fixture.detectChanges();

    const counterMessage = fixture.debugElement
      .query(By.css('p.counterMsg'))
      .nativeElement.innerText;

    expect(counterMessage).toBe('Minimum Reached');
  });

  it('should have buttonName labelled with Increment and Decrement in HTML', () => {
    const incrementButtonText = fixture.debugElement
      .query(By.css('.incrementBtn'))
      .nativeElement.innerText;

    expect(incrementButtonText).toBe('Increment');

    const decrementButtonText = fixture.debugElement
      .query(By.css('.decrementBtn'))
      .nativeElement.innerText;

    expect(decrementButtonText).toBe('Decrement');
  });

  it('should have yellow bg color in h2 element', () => {
    const bgColor = wrapper.querySelector('h2')?.style.backgroundColor;
    expect(bgColor).toBe('rgb(255, 0, 0)');
  });

  it('should have button with className btn', () => {
    expect(wrapper.querySelector('.incrementBtn')).toHaveClass('btn');
    expect(wrapper.querySelector('.decrementBtn')).toHaveClass('btn');
  })

  it('ngOnInit called', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

});
