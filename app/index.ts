import { MenuItem } from './interfaces/menu-item';
import figlet from 'figlet';
import { getMenuItems } from './data/menu-item-data';

console.log(figlet.textSync('Random Recipe', { verticalLayout: 'full' }));

const menuItems: MenuItem[] = getMenuItems();
const randomItem: MenuItem = menuItems[Math.floor(Math.random() * menuItems.length)];

console.log('--------------------------');
console.log('Today you should eat');
console.log(randomItem.title);
console.log('This is how it looks', randomItem.imageUrl);
