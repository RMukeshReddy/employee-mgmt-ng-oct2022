import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products: IProduct[] = [];

  constructor( 
    private productsService: ProductsService, 
    private cartDataService: CartDataService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  // add to cart functionality
  handleAddToCart(product: IProduct) {
    this.cartDataService.addProductToCart(product);
  }

}
