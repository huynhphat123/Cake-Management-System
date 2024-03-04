import { Injectable } from '@angular/core';


export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  role: string;
}

const MENUITEMS = [
  {state: 'dashboard',name: 'Bảng điều khiển',type: 'link',icon: 'dashboard',role: ''},
  {state: 'category',name: 'Quản lý danh mục',type: 'link',icon: 'category',role: 'admin'},
  {state: 'product',name: 'Quản lý sản phẩm',type: 'link',icon:'inventory_2',role: 'admin'},
  {state: 'order',name: 'Quản lý đặt hàng',type: 'link',icon:'shopping_cart',role: ''},
  {state: 'bill',name: 'Xem hóa đơn',type: 'link',icon:'backup_table',role: ''},
  {state: 'user',name: 'Quản lý người dùng',type: 'link',icon:'people',role: 'admin'},

];
@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
