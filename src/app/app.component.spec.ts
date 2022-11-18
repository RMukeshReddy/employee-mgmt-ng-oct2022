import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AboutComponent } from './about/components/about.component';
import { CalcComponent } from './about/components/calc/calc.component';
import { AppComponent } from './app.component'; // Taking up the component for testing
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ToastrModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        HomeComponent,
        ConceptsComponent,
        AboutComponent,
        CpbComponent,
        CebComponent,
        CalcComponent
      ],
      providers: [ ToastrService ]
    }).compileComponents();
  });

  // test spec #1 (or) test case
  it('should create the app', () => {
    // When
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // we are taking up component.ts for testing
    
    // Then (Assert)
    // 'expect' - api from jasmine | toBeTruthy - is a matcher from jasmine
    expect(app).toBeTruthy();
  });

  // test spec #2
  // eslint-disable-next-line quotes
  it(`should have as variable title with value being 'Employee Manager App'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Employee Manager App');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('employee-mgmt-ng-oct2022 app is running!');
  // });
});
