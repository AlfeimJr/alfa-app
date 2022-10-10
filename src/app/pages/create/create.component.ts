import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from './interface/user.interface';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  user: IUser = {} ;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  userForm!: FormGroup; 
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm(this.user)
    console.log(this.user);
    
  }
  createUser(){
    this.user = this.userForm.value
    this.userService.getUser(this.user).subscribe(user =>{
      console.log(user);
    })
  }
  createForm(user: IUser) {
    this.userForm = this.formBuilder.group({
      name: [user.name],
      email: [user.email],
      password: [user.password],
    })
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Digite um email';
    }

    return this.email.hasError('email') ? 'Esse email não é valido' : '';
  }
  
}
