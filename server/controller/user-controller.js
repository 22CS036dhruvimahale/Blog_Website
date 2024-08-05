
// server/controller/user-controller.js

import bcrypt from 'bcrypt';
import User from '../models/user.js';


<<<<<<< HEAD
export const signupUser = async (req, res) => {
  try {
=======
import { request, response } from 'express';
import User from '../model/user.js';
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e

    const salt= await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
 const user = {username:req.body.username, name:req.body.name, password:hashedPassword}
    

    // //Check if the username already exists
    // const existingUser = await User.findOne({ username });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'Username already taken' });
    // }

    // Create a new user
    const newUser = new User(user);
    await newUser.save();

<<<<<<< HEAD
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};
=======
    return response.status(200).json({msg:'Signup successful'})
    }
catch(error){

    return response.status(500).json({msg:'Error while signing up the user'});

} 
} 
export const loginUser=async(request,response)=>{
    let user = await User.findOne({username: request.body.username})
}
>>>>>>> 93d4a9bbc29001c89213f477d8f5d3ef4131b89e
