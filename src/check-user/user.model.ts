import * as mongoose from 'mongoose';

export const User = new mongoose.Schema({
    username:{type:String , required:true},
    password:{type:String , required:true}
});