import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMe, IUser, IUserLogged } from '../pages/create/interface/user.interface';

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

  logar(user: IUserLogged): Observable<{ token: string }> {
    return this.http.post<any>(`${url_api}auth/login`, user)
  }


  getUser(): Observable<IMe> {
		return this.http.get<any>(`${url_api}user/me`)
	}

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get getUserLogged(): IMe {
    const item =  localStorage.getItem('user')
      return item ? JSON.parse(item) : null
  }
  get getLoggedUserId(): string {
    const id = localStorage.getItem('user')
    return id ? JSON.parse(id).id : null;
  }
  getTokenUser(): string {
    const token = localStorage.getItem('token')
    return token ? JSON.parse(token) : null;
  }
  get logged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
