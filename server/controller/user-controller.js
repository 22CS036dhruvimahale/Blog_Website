
// server/controller/user-controller.js

// import bcrypt from 'bcrypt';
import User from '../model/user.js';


export const signupUser = async (req, res) => {
  try {
const user =request.body ;
  

    
//  const user = {username:req.body.username, name:req.body.name, password:hashedPassword}
    
  
    // //Check if the username already exists
    // const existingUser = await User.findOne({ username });
    // if (existingUser) {
    //   return res.status(400).json({ message: 'Username already taken' });
    // }

//     // Create a new user
    const newUser = new User(user);
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
//     console.error('Error during signup:', error);
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};
