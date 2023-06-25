import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
declare var $ :any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService, private _Router:Router){}
  cartProducts:any[]=[]
  total:number = 0
  success:boolean = false
  dontHaveProducts:boolean = false

  ngOnInit(): void {
    this.getProducts()
    
    this.getTotalPrice()

    this.haveProducts()
  }



  getProducts(){
    this.cartProducts = JSON.parse( localStorage.getItem('cart')!)
    this.getTotalPrice()
    console.log(this.cartProducts)
  }

  getTotalPrice(){
    this.total = 0
    for (let i in this.cartProducts) {
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity
    }
  }

  addAount(index:number){
    this.cartProducts[index].quantity++
    if(this.cartProducts[index].quantity < 1){
      alert('Not Accept Minas Number')
      this.cartProducts[index].quantity =1
    }else{
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
      this.getTotalPrice()
    }

  }
  minsAount(index:number){
    this.cartProducts[index].quantity--
    if(this.cartProducts[index].quantity < 1){
      alert('Not Accept Minas Number')
      this.cartProducts[index].quantity =1
    }else{
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
      this.getTotalPrice()
    }

  }
  detectChang(){
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts))
  }

  deleteProduct(index:number){
    this.cartProducts.splice(index,1);
    this.getTotalPrice();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.haveProducts()

  }

  clearData(){
    this.cartProducts = [];
    this.getTotalPrice();
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.haveProducts()
  }

 // send order or data to backend
  orderNow(){

    if(this.cartProducts.length == 0){
      this.success = false
    }else{
      let product = this.cartProducts.map(i => {
        return {productId:i.item.id , quantity:i.quantity}
      })
  
      let Model = {
        userId:5,
        date: new Date(),
        products:product
      }
  
      this._CartService.craeteNewCart(Model).subscribe(() =>{
        this.success = true
      })
      this.clearData()
    }
  }

  haveProducts(){
    if(this.cartProducts.length == 0){
      this.dontHaveProducts = true
      this.success = false
    }else{
      this.dontHaveProducts = false
    }
  }
  routerToMarket(){
    this._Router.navigate(['/products'])
  }

  // pop up function
  popUpProducts:any 
  show(index:number){
    this.popUpProducts = this.cartProducts[index];
    $('.imageP').attr('src', this.popUpProducts.item.image)
    $('.h2P').html(this.popUpProducts.item.title.slice(0,25))
    $('.descP').html(this.popUpProducts.item.description)
    $('.categP').html(this.popUpProducts.item.category)
    $('.qunttP').html(this.popUpProducts.quantity)
    $('.pricP').html(`${this.popUpProducts.item.price} $`)
    $('.totlPricP').html(`${this.popUpProducts.item.price * this.popUpProducts.quantity} $`)
    
    $('.mainPop').slideDown((1000), () => {
      $('.mainPop').css({'display':'flex'})
      $('.popUp').slideDown(1000)
    })


  }

  exit(){
    $('.popUp').slideUp((1000), () => {
      $('.mainPop').slideUp((1000), () => {
        $('.mainPop').css({'display':'none'})
      })
    })
  }

}
