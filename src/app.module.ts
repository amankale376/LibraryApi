import { Module } from '@nestjs/common';
import { BookAvailService } from './book-avail/book-avail.service';
import { BookOrderController } from './book-order/book-order.controller';
import { CheckUserService } from './check-user/check-user.service';


@Module({
  imports: [],
  controllers: [BookOrderController],
  providers: [BookAvailService, CheckUserService],
})
export class AppModule {}
