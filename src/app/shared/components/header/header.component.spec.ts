import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { NavigationHelper } from '../../utils/navigation-helper';

import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        HeaderComponent,
        MenuComponent
      ],
      imports: [ 
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        ToastrService,
        AuthService,
        { 
          provide: NavigationHelper,
          useValue: 'navigateTo'
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
