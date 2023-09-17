import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}

  err:string = ''

  loginForm:FormGroup = new FormGroup({
    email: new FormControl (null, [Validators.required, Validators.email]),
    password: new FormControl (null, [Validators.required, Validators.pattern(/^[A-Z][0-9]{5}$/)] ),
    rePassword: new FormControl (null, [Validators.required] )
  } , {validators : this.rePassword})

  rePassword(registerForm: any) {
    let passwordControl = registerForm.get('password');
    let repasswordControl = registerForm.get('rePassword');
    if (passwordControl?.value == repasswordControl?.value) {
      return null;
    } else {
      repasswordControl?.setErrors({
        passwordMatch: 'rePassword must Matched',
      });
      return { passwordMatch: 'rePassword must Matched' };
    }
  }


  submitLogin(formInfo:FormGroup){

    this._AuthService.login(formInfo.value).subscribe((response)=>{
      console.log(response)
      if(response.message == 'success')
      {
        this._Router.navigate(['/products'])
        //token part
        localStorage.setItem('userToken',response.token)
        this._AuthService.setUserData();
      }
    }, (error)=>{
      this.err = error.error.message
      console.log(this.err)
    })
  }

}
