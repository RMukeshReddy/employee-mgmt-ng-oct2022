import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';
import { NavigationHelper } from '../../utils/navigation-helper';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor( 
    private cartDataService: CartDataService,
    private navigationHelper: NavigationHelper,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    // getting the length of cartItems from service
    this.cartDataService.latestCartItems.subscribe((cartItems) => {
      this.cartCount = cartItems.length;
    })
  }
  
  handleCartDetails() {
    this.navigationHelper.navigateTo('/products/cart');
  }
}
