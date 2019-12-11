import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorBodyService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req;
    // 添加 PartnerID
    if (req.url.indexOf('newhouse/Account') !== -1 || req.url.indexOf('ChineseDistricts') !== -1) {

    } else {

        // const PartnerID =  this.getAcitve.getActiveAccountID();

        // const body = _.extend(authReq.body, { "PartnerID": PartnerID });

        // authReq = authReq.clone({ "body": body });
    }

    return next.handle(authReq);
  }

}
