import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/components/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnitTestingDemoComponent } from './unit-testing-demo/components/unit-testing-demo/unit-testing-demo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'homePage', title: 'Employee Management | Home' }
  },
  {
    path: 'concepts',
    component: ConceptsComponent,
    data: { animation: 'conceptsPage', title: 'Employee Management | Concepts' }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
    data: { animation: 'aboutPage', title: 'Employee Management | About' }
  },
  {
    path: 'unit-testing',
    component: UnitTestingDemoComponent,
    canActivate: [AuthGuard],
    data: { animation: 'unitTestingPage', title: 'Employee Management | Unit Testing' }
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./employees/employees.module').then((m) => m.EmployeesModule),
    data: { animation: 'employeesPage', title: 'Employee Management | Employees' }
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
    data: { animation: 'productsPage', title: 'Employee Management | Products' }
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/auth.module').then((m) => m.AuthModule)
  },
  { 
    path: '**', 
    pathMatch: 'full', 
    component: PageNotFoundComponent,
    data: { animation: 'pageNotFound', title: 'Employee Management | Invalid Page' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
