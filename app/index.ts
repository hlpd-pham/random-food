import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
import { MenuItem } from './interfaces/menu-item';
import { getMenuItems } from './data/menu-item-data';

clear();

console.log(chalk['red'](figlet.textSync('Random Recipe', { verticalLayout: 'full' })));

const menuItems: MenuItem[] = getMenuItems();
const randomItem: MenuItem = menuItems[Math.floor(Math.random() * menuItems.length)];

console.log(chalk['yellow']('-----------------------------------------------------'));
console.log('Today you should eat:', randomItem.title);
console.log('This is how it looks:', randomItem.imageUrl);
