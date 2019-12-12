import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoolSessionStorage } from '../coolStorage';

@Injectable()
export class InterceptorHeaderService implements HttpInterceptor {

  constructor(
    private sessionStorage: CoolSessionStorage
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 添加token
    const key = 'AccessToken';

    const token = this.sessionStorage.getObject('token') || {};
    const authReq = req.clone({setHeaders: {Authorization: `Bearer ${token[key]}`}});
    return next.handle(authReq);
  }

}
