import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { RegistrationModule } from '../registration/registration.module';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    DropdownComponent,
    ProductsComponent,
    NotfoundComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RegistrationModule
  ],

  exports: [
    HeaderComponent,
    SpinnerComponent,
    DropdownComponent,
    ProductsComponent,
    FooterComponent

  ]
})
export class SharedModule { }
