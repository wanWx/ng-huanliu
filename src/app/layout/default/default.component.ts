import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/mock';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isCollapsed = false;

  menus = [];

  constructor(
    private router: Router,
    private menu: MenuService
  ) { }

  ngOnInit() {
    this.menus = this.menu.menus();
  }

  getLogout() {
    this.router.navigate(['login']);
  }

}
