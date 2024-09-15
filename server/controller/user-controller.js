
// server/controller/user-controller.js

import bcrypt from 'bcrypt';
import User from '../model/user.js';


export const signupUser = async (request, response) => {
  try {
     
const user =request.body ;


    // Create a new user
    const newUser = new User(user);
    await newUser.save();

    return response.status(200).json({ msg: 'User created successfully' });
  } catch (error) {
//    
    return response.status(500).json({ msg: 'Error while signing up the user.' });
  }
};
