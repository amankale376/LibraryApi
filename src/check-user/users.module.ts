import { Module } from '@nestjs/common';
import {CheckUserService} from './check-user.service';
import {BookOrderController} from '../book-order/book-order.controller';
@Module({
    imports:[],
    controllers:[BookOrderController],
    providers:[CheckUserService],
})
export class UsersModule {
}
