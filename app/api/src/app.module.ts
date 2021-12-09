import { Module } from '@nestjs/common';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [MenuItemModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
