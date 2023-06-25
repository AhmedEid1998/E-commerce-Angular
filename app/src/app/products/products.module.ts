import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    
  ],
  imports: [
    CommonModule ,
    SharedModule,
    RouterModule
  ]
})
export class ProductsModule { }
