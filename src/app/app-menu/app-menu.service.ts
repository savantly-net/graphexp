import { Injectable } from '@angular/core';
import { Menu } from '@savantly/ngx-menu';

export class AppMenu {
    id: string;
    displayText: string;
    _public: boolean;
    roles: string[];
    items: AppMenu[];
    position: number;
    disabled: boolean;
    icon: string;
    url: string;
    new: boolean;
}

@Injectable()
export class AppMenuService {
  menus: Menu[];

  constructor() {}

}
