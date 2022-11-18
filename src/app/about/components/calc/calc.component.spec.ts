import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  CalcComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing whether the tag h2 has My Calculator as context or not
  it('has My Calculator as heading in html', () => {
    const calcCompHTML = fixture.nativeElement as HTMLElement;
    expect(calcCompHTML.querySelector('h2')?.textContent).toMatch(/my calculator/i);
  });

  // testing the add method
  it('has add method that adds two numbers properly', () => {
    expect(component.add(10, 20)).toEqual(30);
    expect(component.add(3, 5)).toEqual(8);
  });

  // testing whether the add method returns number as datatype or not
  it('has add which returns datatype number', () => {
    // checking the return thype
    expect(component.add(10, 20)).not.toBeNaN();
    expect(component.add(10, 20)).not.toBeUndefined();
    expect(component.add(10, 20)).not.toBeTrue();
  });
  
})