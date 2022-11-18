import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NavigationHelper } from 'src/app/shared/utils/navigation-helper';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      providers: [
        ToastrService,
        { provide: NavigationHelper, useValue: 'navigateTo' }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
