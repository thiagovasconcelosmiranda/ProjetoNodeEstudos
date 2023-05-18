import {Request, Response} from 'express';

import User from '../models/User';
export let message = false;

 export const newUser = async (req: Request, res: Response) => {
    let {firstName,lastName, email, age, interests} = req.body;
    let newAge: number =  parseInt(age);
    var sepinterests =  interests.split(',');
    let newUser = await User.create({
        name:{firstName: firstName, lastName: lastName},
        email: email,
        age: newAge,
        interests: sepinterests
       });

       if(newUser){
          message = true;
          res.redirect('/');
       }


}

export const updateUser = async (req: Request, res: Response) => {
   let id = await req.params.id;
   let user = await User.findOne({_id: id});
   let update = await User.updateMany(
      {id: id} ,
      {age: (user?.age)}  
   );
   if(update){
      res.redirect('/');
   }

   
}