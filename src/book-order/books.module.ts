import { Module } from '@nestjs/common';
import { BookAvailService } from './book-avail.service';
import { BookOrderController } from './book-order.controller';

@Module({
    imports:[],
    controllers:[BookOrderController],
    providers:[BookAvailService],
})
export class BooksModule {}
