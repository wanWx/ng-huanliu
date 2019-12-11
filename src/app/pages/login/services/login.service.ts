import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(reqdata, callBack, errorBack?) {
    this.http.post(reqdata, 'Account/Login', callBack, errorBack);
  }

  getCurrentAccount(reqdata, callBack, errorBack?) {
    this.http.post(reqdata, 'Account/GetCurrentAccount', callBack, errorBack);
  }

  getAllPermissions(reqdata, callBack, errorBack?) {
    this.http.post(reqdata, 'Partner/Authorizations/GetAllPermissions', callBack, errorBack);
  }
}
