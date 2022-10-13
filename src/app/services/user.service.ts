import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser, IUserLogged } from '../pages/create/interface/user.interface';

const url_api = environment.apiUrl


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${url_api}user`, user)
  }

  logar(user: IUserLogged): Observable<{token:string}> {
    return this.http.post<any>(`${url_api}auth/login`, user).pipe(
      tap((response)=>{
        if(response.token){
          localStorage.setItem('token', JSON.stringify(response.token))
        }
      })
    )


  }
  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get getUserLoggedIn(): IUserLogged {
    const item =  localStorage.getItem('usuario')
      return item ? JSON.parse(item) : null
  }
  get getLoggedUserId(): string {
    const id = localStorage.getItem('usuario')
    return id ? JSON.parse(id).id : null;
  }
  get getTokenUser(): string {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null;
  }
  get logged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
