import {Request, Response} from 'express';
import User from '../models/User';
import {message} from '../controllers/userController';


export const Home =  async (req: Request, res: Response) =>{
    //Delete 
    //await User.findByIdAndDelete({email: 'profisao33@gmail.com'});

    let users = await User.find({}).sort({"name.firstName": 1});
    res.render('pages/loja', {users, message});
}