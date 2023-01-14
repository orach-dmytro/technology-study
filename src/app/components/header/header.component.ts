import { Component, OnInit } from '@angular/core';

export interface MenuItemModel {
  link: string;
  text: string;
}

const menu: MenuItemModel[] = [
  { link: 'customer-database', text: 'Customer database' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menu: MenuItemModel[] = menu;

  ngOnInit(): void {
    this.menu = menu;
  }
}
