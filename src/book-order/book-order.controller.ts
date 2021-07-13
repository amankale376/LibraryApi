import { Body, Controller , Get, Post   } from '@nestjs/common';
import { BookAvailService } from 'src/book-avail/book-avail.service';
import { CheckUserService } from 'src/check-user/check-user.service';
import {Users , checkUserDto} from './dto/user.dto';

@Controller('book-order')
export class BookOrderController {
    constructor(private readonly checkUserService:CheckUserService , private readonly bookAvailService:BookAvailService ){};

    @Post()
    checkUser(@Body() body: Users):string{
        let User = {
            username:body.username,
            password:body.password
        }
        let book = body.orderedBook;
         let UserAuth: boolean  = this.checkUserService.checkuser(User);
        let bookAvail: boolean = this.bookAvailService.checkBook(book);
        if(UserAuth){
            if(bookAvail){return "delivery for book has been placed";
        }else{
            return "book is not available";
        }
        
        }else{
            return 'user is not registered';
        }
    }

}
