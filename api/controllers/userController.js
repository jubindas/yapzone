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

export {createUser};