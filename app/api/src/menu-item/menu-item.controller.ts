import { Response } from 'express';

import { Controller, Get, HttpStatus, Res } from '@nestjs/common';

import { MenuItemService } from './menu-item.service';

@Controller('menu-item')
export class MenuItemController {
  constructor(private menuItemService: MenuItemService) {}

  @Get('random')
  public getRandomMenuItem(@Res() res: Response) {
    res.status(HttpStatus.OK).send(this.menuItemService.getRandomMenuItem());
  }
}
