import { PasswordValidators } from './password.validators';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form:FormGroup;
  constructor(fb:FormBuilder) { 
    this.form=fb.group({
      oldPassword:["",Validators.required,
      PasswordValidators.validOldPassword],
      newPassword:["",Validators.required],
      confirmPassword:["",Validators.required]

    },{
          validator: PasswordValidators.passwordsShouldMatch
        });


  }
  //validators work like this you them in old password then it automaticatically calls valid old password
  //then thriugh cntrol we check condition
  //for confirm password we want to get value of whole form so we want to pass form goup basically where form


get oldPassword() { return this.form.get('oldPassword'); }
get newPassword() { return this.form.get('newPassword'); }
get confirmPassword() { return this.form.get('confirmPassword'); }
}







