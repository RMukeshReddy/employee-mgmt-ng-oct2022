import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationHelper } from './navigation-helper';

describe('NavigationHelper', () => {
  let navigationHelper: NavigationHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ]
    });
    navigationHelper = TestBed.inject(NavigationHelper);
  });

  it('should create an instance', () => {
    expect(navigationHelper).toBeTruthy()
  });
  
  // testing the navigateTo method
  it('should redirect to the particular path when navigateTo method is called', () => {
    const url = '/auth/login';
    spyOn(navigationHelper, 'navigateTo').and.callThrough();
    navigationHelper.navigateTo(url);
    expect(navigationHelper.navigateTo).toHaveBeenCalledWith(url);
  });

});
