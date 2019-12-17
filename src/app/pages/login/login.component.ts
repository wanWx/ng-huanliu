import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { CoolSessionStorage, CoolLocalStorage } from 'src/app/common';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  passwordVisible = false;
  isbtnloading = false;

  loadingdesc = '登录';

  public tabActive = true;

  public loaderToast: any = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpClient: HttpClient,
    private service: LoginService,
    private sessionStorage: CoolSessionStorage,
    private localStorage: CoolLocalStorage,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  Login(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }

    const param = {
      MobilePhone: this.userName.value,
      PhoneCode: this.passWord.value,
      ClientID: 'FLM.Admin.WebClient'
    };

    if (this.validateForm.valid) {
      // this.isbtnloading = true;
      this.service.login(param, res => {
        const items = res.Token;

        this.sessionStorage.setObject('token', items);

        // 获取城市字典
        this.getCity();
      });
    }
  }

  getCity() {
    this.httpClient
      .get('https://flm-resource.oss-cn-shanghai.aliyuncs.com/Dictionary/ChineseDistricts.json')
      .subscribe(res => {
        this.localStorage.setObject('city', res);
        this.getCurrentAccount();
    });
  }

  getCurrentAccount() {
    const key = 'Partner';
    const idkey = 'ID';

    this.service.getCurrentAccount({}, res => {

      this.message.remove(this.loaderToast);

      const items = res.PartnerAccounts;
      if (items.length !== 0) {

        const id = items[0][key][idkey];

        this.sessionStorage.setObject('accountInfor', res);
        this.sessionStorage.setObject('activeAccountInfor', items[0]);


        // 获取权限支点
        this.service.getAllPermissions({}, data => {

          this.sessionStorage.setObject('permission', data.AllPermissions);
          // 路由跳转
          this.router.navigate(['/main/home']);
        });
      } else {
          this.message.create('error', '还未加入任何团队，请耐心等待管理员分配');
      }

  });
  }

  get userName() { return this.validateForm.controls.username; }
  get passWord() { return this.validateForm.controls.password; }
}
