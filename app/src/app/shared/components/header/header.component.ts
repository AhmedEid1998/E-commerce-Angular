import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/registration/service/auth.service';

declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _AuthService:AuthService){}

  isLogin:boolean = false
  // num:any = this._CartComponent.cartProducts.length;

  calLogout(){
    this._AuthService.logout();
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe(()=>{
      if(this._AuthService.userData.getValue() != null){
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    })

    // this.num = this._CartComponent.cartProducts

    $('.hamburger').click( function(){
      $('.nav-bar').toggleClass('clicked')
      $('.hamburger .line').toggleClass('hamClr')
      $('.hamburger .l1').toggleClass('l1x')
      $('.hamburger .l2').toggleClass('l2x')
      $('.hamburger .l3').toggleClass('l3x')
    })

    window.onscroll = ()=>{
      $('.nav-bar').removeClass('clicked')
      $('.hamburger .line').removeClass('hamClr')
      $('.hamburger .l1').removeClass('l1x')
      $('.hamburger .l2').removeClass('l2x')
      $('.hamburger .l3').removeClass('l3x')
    }


  }
}

