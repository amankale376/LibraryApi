import { Injectable } from '@nestjs/common';

import {booksAvail} from '../booksDb';
@Injectable()
export class BookAvailService {
    private  books = booksAvail;
    checkBook(payload:string):boolean{
      return  this.books.some(book=>{ 
        if(payload === book.name){
            if(book.qty>0){
                return true;
            }else return false;
        }else return false;
      });
    }
}
