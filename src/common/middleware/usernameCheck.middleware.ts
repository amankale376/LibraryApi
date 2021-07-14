import { HttpException, Injectable , NestMiddleware } from "@nestjs/common";
import { Request , Response , NextFunction } from 'express';
import {registeredUsers} from '../../db';
@Injectable()
export class UsernameCheck implements NestMiddleware{
 use(req:Request , res:Response , next:NextFunction){
    const user = req.body.username;
        let checkUser: boolean = registeredUsers.some(u=>u.username === user);
        if(!checkUser){
            throw new HttpException('user not found',404);
        }
    next();
 }
}