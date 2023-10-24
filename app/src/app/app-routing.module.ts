import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { RegisterComponent } from './registration/register/register.component';
import { LoginComponent } from './registration/login/login.component';
import { AuthGuard } from './registration/guards/auth.guard';
import { LogGuard } from './registration/guards/log.guard';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: AllProductsComponent,
  },
  {
    path: 'details/:id',
    canActivate: [AuthGuard],
    component: ProductsDetailsComponent,
  },
  { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
  { path: 'register', canActivate: [LogGuard], component: RegisterComponent },
  { path: 'login', canActivate: [LogGuard], component: LoginComponent },
  { path: '**', component: NotfoundComponent },

  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // {path: 'products', component: AllProductsComponent},
  // {path: 'details/:id', component: ProductsDetailsComponent},
  // { path: 'cart', component: CartComponent},
  // { path: 'register', component: RegisterComponent},
  // { path: 'login', component: LoginComponent},
  // { path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
