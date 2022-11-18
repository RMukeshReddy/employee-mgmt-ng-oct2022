import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styles: [
  ]
})

// using async pipe
export class CartViewComponent implements OnInit {

  cartListItems!: Observable<IProduct[]>;

  constructor( private cartDataService: CartDataService ) { }

  ngOnInit(): void {
    this.cartListItems = this.cartDataService.latestCartItems
  }

}

// using subscribe and subscription
// export class CartViewComponent implements OnInit, OnDestroy {

//   cartListItems: IProduct[] = [];
//   cartItemsSubscription!: Subscription;

//   constructor( private cartDataService: CartDataService ) { }

//   ngOnInit(): void {
//     this.cartItemsSubscription = this.cartDataService.latestCartItems
//       .subscribe((cartItems: IProduct[]) => {
//         this.cartListItems = cartItems;
//       })
//   }

//   ngOnDestroy(): void {
//     if(this.cartItemsSubscription) {
//       this.cartItemsSubscription.unsubscribe();
//     }
//   }

// }
