// const express =require("express")
const jwt = require("jsonwebtoken")
const User = require("../model/user.model")

const generateToken =(user)=>
{
    return jwt.sign({user},"tanya")
}


const register = async(req,res)=>
{
    try{
 let user =await User.findOne({email:req.body.email}).lean().exec()
 if(user)
 {
     return res.status(201).send("user already exist")
 }
 else{
const token = generateToken(user)
user = await User.create(req.body)

return res.status(201).send({user,token})
 }
    }
    catch(err)
    {
        return res.status(401).send({message:err.message})
    }
}
const login = async(req,res)=>
{
    try{
        let user = await User.findOne({email:req.body.email})
        if(!user)
        {
            return res.status(401).send("wrong email")
        }
        const match = user.checkPassword(req.body.password)
        if(!match)
        {
            return res.status(401).send("wrong password")
        }
        const token = generateToken(user)
        return res.status(201).send({user,token})

    }
    catch(err)
    {
        return res.status(401).send(err.message)
    }
}

module.exports = {register,login}