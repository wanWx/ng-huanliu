import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData, CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,
    CommonModule
  ],
  exports: [NgZorroAntdModule],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ]
})
export class CommonCoModule { }
