import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}

  err:string = ''
  registerForm:FormGroup = new FormGroup({
    name: new FormControl (null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ),
    email: new FormControl (null, [Validators.required, Validators.email]),
    phone: new FormControl (null, [Validators.required,Validators.pattern(/^[01][0|1|2|5][0-9]{8}$/)] ),
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


  submitRegister(formInfo:FormGroup){

    this._AuthService.register(formInfo.value).subscribe((response)=>{
      console.log(response)
      if(response.message == 'success')
      {
        this._Router.navigate(['/login'])
      }
    }, (error)=>{
      this.err = error.error.message
      console.log(this.err)
    })
  }


}
