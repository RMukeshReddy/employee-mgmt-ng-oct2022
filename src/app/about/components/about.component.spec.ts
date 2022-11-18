import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about.component';
import { CalcComponent } from './calc/calc.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AboutComponent,
        CalcComponent
      ],
      imports: [ BrowserAnimationsModule ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing whether the featureName is 'About Us' or not
  // eslint-disable-next-line quotes
  it(`has featureName with 'About Us'`, () => {
    expect(component.featureName).toBe('About Us');
  })

  // testing whether the h1 tag renders featureName or not
  it('should render featureName in h1', () => {
    const aboutCompHTML = fixture.nativeElement as HTMLElement; // taking up somponent HTML for testing
    expect(aboutCompHTML.querySelector('h1')?.textContent).toBe('About Us');
  })
});
