import { Injectable } from '@nestjs/common';
import {registeredUsers} from '../db';
import {checkUserDto} from '../book-order/dto/user.dto';

@Injectable()
export class CheckUserService {
   private regUsers = registeredUsers;

    checkuser(payload: checkUserDto):boolean{
        return this.regUsers.some(user=>{
                if(payload.password === user.password){
                    return true; 
                }else return false;
            
        });
          
    }
}
