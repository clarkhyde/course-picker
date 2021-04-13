const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();
 const bcrypt = require('bcrypt');
 const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);


//Register
router.post('/register', (req, res)=>{
    let userReq = req.body.username;
    const passwordReq = req.body.password;
    const hash = bcrypt.hashSync(passwordReq, salt);

    if(userReq && passwordReq){
        new Users({
            username: req.body.username,
            password: hash,
        })
        .save()
        .then(newUser =>{
            res.status(200).json(newUser);
        })
    } else {
        res.status(400).send("Access Denied!");
    }
})
//Login
router.post('/login', (req, res)=>{
    let userReq = req.body.username;
    let passwordReq = req.body.password;
    
    if(userReq){
        Users
            .where({username: userReq
            })
            .fetch()
            .then(user =>{
                const match = bcrypt.compare(passwordReq,user.attributes.password).then(function(result){
                    if(result){
                        const payload = {username: userReq};
                        const token = jwt.sign(payload, process.env.JWT_KEY);
                        res.status(200).json({token});
                    } else{
                        res.status(403).json({err: "Incorrect Password"});
                    }
                    
                });

            })
            .catch((err)=>{
                res.status(400).json({err: "Incorrect username or password"})
            });
    };
})

module.exports =router;