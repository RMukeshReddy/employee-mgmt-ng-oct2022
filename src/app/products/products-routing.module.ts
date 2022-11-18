import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const productsRoutes: Routes = [
  { 
    path: '', 
    component: ProductsListComponent 
  },
  { 
    path: 'cart', 
    component: CartViewComponent,
    data: { title: 'Employee Management | Cart' } 
  },
  { 
    path: ':id', 
    component: ProductDetailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
