import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) { }
  canActivate(){
    if (this.userService.logged) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }


}
