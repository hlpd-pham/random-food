import { MenuItem } from '../interfaces/menu-item';
import * as data from '../menu-item-data.json';

export function getMenuItems(): MenuItem[] {
  const menuItems = data.menuItems;
  return menuItems.map(
    (item) =>
      ({
        id: item.id,
        title: item.title,
        imageUrl: item.image,
        serving: item.servings,
      } as MenuItem),
  );
}
