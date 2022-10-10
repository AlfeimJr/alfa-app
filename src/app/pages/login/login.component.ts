import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from './interface/user.interface';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser = {} ;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  formCliente!: FormGroup;
  password = new FormControl ('')
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm(this.user)
    console.log(this.user);
    
  }
  createUser(){
    this.user = this.formCliente.value
    this.userService.getUser(this.user).subscribe(user =>{
      console.log(user);
    })
  }
  createForm(user: IUser) {
    this.formCliente = this.formBuilder.group({
      nome: [user.name],
      email: [user.email],
      password: [user.password],
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
}
