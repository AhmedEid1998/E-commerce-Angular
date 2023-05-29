import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductService: ProductService) {}
  
  err: string = '' ;
  loading:boolean = false;
  products: any [] = [];
  categorys: any []=[] ;
  cartProducts:any [] = []

  ngOnInit() {


    // don't forget erorr handling of methods elly taht deeh

    // call all products
    this.getProducts()

    // call categories' titles in the dropdown menue
    this.getCategories()

    //call filter products by category
    this.filterCategory


  }

  //get all products from service
  getProducts(){
    this.loading = true;
    this._ProductService.getAllProducts().subscribe((response) =>{
      this.loading = false;
      this.products = response
    }, error =>{
      this.loading = false;
      this.err = error.message

    })
  }

  //get categories from service
  getCategories(){
    this.loading = true;
    this._ProductService.getCategorys().subscribe((response) =>{
      this.loading = false;
      this.categorys = response
    }, error =>{
      this.loading = false;
      this.err = error.message
    })
  }


  //get products by categories from service
  getCategoryProducts(keyword:string){
    this.loading = true;
    this._ProductService.getProductsByCategories(keyword).subscribe((response)=>{
      this.loading = false;
      this.products = response;
    }, error =>{
      this.loading = false;
      this.err = error.message
    })
  }

  //filter products by category
  filterCategory(event:any){
    let value = event.target.value;
    (value == 'all')?this.getProducts():this.getCategoryProducts(value)
  }


  //add products which user want to his cart
  addCart(event:any){
    if('cart' in localStorage){
      this.cartProducts = JSON.parse( localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(member => member.item.id == event.item.id)
      if(exist){
        alert('This Item Already In Your Cart')
      }else{
        this.cartProducts.push(event)
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    }else{
      this.cartProducts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }

    console.log(event)
  }

}
