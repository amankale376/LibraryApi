import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BookAvailService } from './book-avail/book-avail.service';
import { BookOrderController } from './book-order/book-order.controller';
import { CheckUserService } from './check-user/check-user.service';
import { UsernameCheck } from './common/middleware/usernameCheck.middleware';


@Module({
  imports: [],
  controllers: [BookOrderController],
  providers: [BookAvailService, CheckUserService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(UsernameCheck).forRoutes({
      path:'book-order/',
      method:RequestMethod.POST
    });
  }
}
