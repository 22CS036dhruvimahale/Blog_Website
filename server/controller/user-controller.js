
// server/controller/user-controller.js

// import bcrypt from 'bcrypt';
import User from '../model/user.js';


export const signupUser = async (req, res) => {
  try {
const user =request.body ;


    // Create a new user
    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
//    
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};
