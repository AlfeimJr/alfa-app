import { HttpClient } from '@angular/common/http';
import { Injectable,   } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../pages/create/interface/user.interface';

const url_api = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(user: IUser): Observable<IUser>{
  return this.http.post<IUser>(`${url_api}user`, user)
  }
}
