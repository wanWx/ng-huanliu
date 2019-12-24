import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  Menus = [
    {
      text: '首页',
      link: 'home',
      icon: 'home',
      children: []
    },
    {
      text: '流程管理',
      link: '',
      icon: 'user',
      open: true,
      children: [
        {
          text: '提交流程',
          link: '/main/process/submit-process',
          icon: '',
        },
        {
          text: '流程列表',
          link: '/main/process/process-list',
          icon: '',
        },
        {
          text: '设计任务',
          link: '/main/process/design-task',
          icon: '',
        },
        {
          text: '我的归档',
          link: '/main/process/my-file',
          icon: '',
        },
        {
          text: '楼盘管理',
          link: '/main/process/estate-manage',
          icon: '',
        }
      ]
    },
    {
      text: '数据报表',
      link: '',
      icon: 'laptop',
      children: [
        {
          text: '开发工作量报表',
          link: '/main/report/development-effort',
          icon: '',
        },
      ]
    },
    {
      text: '账号和角色',
      link: '',
      icon: 'info',
      children: [
        {
          text: '用户列表',
          link: '/main/account-role/user-list',
          icon: ''
        },
        {
          text: '角色管理',
          link: '/2112',
          icon: ''
        },
        {
          text: '操作日志',
          link: '/1212',
          icon: ''
        }
      ]
    },
    {
      text: '系统设置',
      link: '',
      icon: 'notification',
      children: [
        {
          text: '链接设置',
          link: '/aaa',
          icon: ''
        },
        {
          text: '系统参数设置',
          link: '/main/system-setup/parameter-setting',
          icon: ''
        }
      ]
    }
  ];

  menus() {
    return this.Menus;
  }
}
