import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { INIT_FLAG, START_USING_DATE } from 'src/app/services/local-storage/local-storage.namespace';
import { getTodayTime } from 'src/utils/time';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;

  passwordVisible = false;
  isbtnloading = false;

  constructor(
    private store: LocalStorageService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  Login(): void {
    console.log(this.validateForm);
    this.store.set(INIT_FLAG, true);
    this.store.set(START_USING_DATE, getTodayTime());
    this.isbtnloading = true;
  }

}
