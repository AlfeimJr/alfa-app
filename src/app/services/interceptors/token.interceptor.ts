import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../user.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private userService : UserService) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.getTokenUser();

                if (token) {
                        request = request.clone({
                                headers: request.headers.set('Authorization', `Bearer ${token}`),
                        });
                }

                return next.handle(request);
    }
}
