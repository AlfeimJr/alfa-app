import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUserLogged } from '../create/interface/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.criarForm()
  }
  criarForm(){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  logar(){
    if(this.formLogin.invalid) return;
    let user = this.formLogin.getRawValue() as IUserLogged;
    this.userService.logar(user).subscribe((response) => {
        if(!response.token){
          this.snackBar.open('Falha na autenticação', 'Usuário ou senha incorretos.', {
            duration: 3000
          });
        }
        localStorage.setItem('token', JSON.stringify(response.token))
        this.userService.getUser().subscribe((res)=>{
          localStorage.setItem('user', JSON.stringify(res))
        })
        this.router.navigate(['home'])
    })
  }
}
