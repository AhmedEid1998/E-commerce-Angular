import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { RegisterComponent } from './registration/register/register.component';
import { LoginComponent } from './registration/login/login.component';
import { AuthGuard } from './registration/auth.guard';

const routes: Routes = [
  {path:'products',canActivate:[AuthGuard] , component:AllProductsComponent},
  {path:'details/:id',canActivate:[AuthGuard], component:ProductsDetailsComponent},
  {path:'cart',canActivate:[AuthGuard], component:CartComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:'products', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
