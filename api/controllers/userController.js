
import User from '../models/User.js';
import mongoose from 'mongoose';

// Create a new user
const createUser = async(req, res)=>{
    try{
//if user already exists, return error

const userExists = await User.findOne({email: req.body.email});
if(userExists){
    return res.status(400).send({
        message: "user already exists",
        error: "user already exists"
    });
}

// Create a new user
const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
});

const newUser = await user.save();
res.send({
    message: "user created successfully",
    user: {         
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,   
    }
});

    }catch(error){
        res.send({
            messsage: "error creating user",
            error: error.message
        })
    }

}

const login = async(req, res) => {
  const { email, password } = req.body;
  

  if (!email || !password) {
    return res.status(400).send({
      message: "email and password are required",
      error: "email and password are required"
    });
  }

  try {
    const user = await User.findOne({ email });
    

    if (user && user.password === password) {
      
      return res.status(200).send({
        message: "user logged in successfully",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        }
      });
    } else {
      console.log("Login failed ❌ - Wrong email or password");
      return res.status(400).send({
        message: "invalid email or password",
        error: "invalid email or password"
      });
    }

  } catch (error) {
    console.log("Login error ❌", error.message);
    return res.status(400).send({
      message: "error logging in user",
      error: error.message
    });
  }
};




 export {createUser, login }