import { InterceptorBodyService } from './interceptor-body';
/** 拦截器配置 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorHeaderService } from './interceptor-header';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorHeaderService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorBodyService, multi: true }
];
