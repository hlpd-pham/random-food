import { Injectable } from '@nestjs/common';

import { MenuItem } from '../interfaces/menu-item';
import { MOCK_MENU_ITEM_DATA } from '../mock-data/menu-items';

@Injectable()
export class MenuItemService {
  public getRandomMenuItem(): MenuItem {
    const allItems = MOCK_MENU_ITEM_DATA.menuItems.map((item) => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image,
      serving: item.servings,
    }));
    return allItems[Math.floor(Math.random() * allItems.length)];
  }
}
