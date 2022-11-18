import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { UnitTestingDemoComponent } from './unit-testing-demo.component';
import { CounterComponent } from '../counter/counter.component';
import { HighlightDirective } from '../../directives/highlight.directive';

describe('UnitTestingDemoComponent', () => {
  let component: UnitTestingDemoComponent;
  let fixture: ComponentFixture<UnitTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        UnitTestingDemoComponent,
        CounterComponent,
        HighlightDirective
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing whether the div has skyblue color or not
  it('should have skyblue for <div>', () => {
    const highlightWrapperEl = fixture.nativeElement.querySelector('[data-testid="highlightWrapper"]');
    const bgColor = highlightWrapperEl.style.backgroundColor;
    expect(bgColor).toBe('skyblue');
  });

  // Approch #1 to test with fakeAsync and tick
  it('has featureName with proper text [APPROACH #1]', fakeAsync(() => {
    component.ngOnInit();
    tick(2001);
    expect(component.featureName).toEqual('Testing the ngOnInit with fakeAsyc and tick');
  }));

  // Approach #2 to test using timeout
  it('has featureName with proper text [APPROACH #2]', ((done) => {
    component.ngOnInit();
    setTimeout(() => {
      expect(component.featureName).toEqual('Testing the ngOnInit with fakeAsyc and tick');
      done();
    }, 2001);
  }));
});
