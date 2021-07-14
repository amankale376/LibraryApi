import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsernameCheck } from './common/middleware/usernameCheck.middleware';
import {MongooseModule} from '@nestjs/mongoose';
import { UsersModule } from './check-user/users.module';
import { BooksModule } from './book-order/books.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://aman:Test@123@cluster0.5lgy3.mongodb.net/library'), UsersModule , BooksModule],

})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(UsernameCheck).forRoutes({
      path:'book-order/',
      method:RequestMethod.POST
    });
  }
}
