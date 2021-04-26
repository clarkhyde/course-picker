const express = require('express');
const router = express.Router();
const Courses = require('../models/courses');
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.use(authorize);

function authorize(req, res, next) {
    const tokenString = req.headers.authorization;
    const token = tokenString ? tokenString.split(' ')[1] : '';
    if (token.length > 0) {
      jwt.verify(token, process.env.JWT_KEY, (err, decodedData) => {
        if(err) {
          res.status(403).json({message: 'Token invalid or expired'});
        } else {
          req.decoded = decodedData;
          next();
        }
      })
    }
    else {
      res.status(403).json({message: 'Not authorized to access this.'});
    }
  }

//get route for getting courses of course
router.get(`/courses`,(req,res)=>{
    Courses
        .where("viewable",1)
        .fetchAll()
        .then(courses=>{
            res.status(200).json(courses);
        })
        .catch(()=>{
            return res.status(404).json({error: "an error has occured, please try again later"})
        });
});



module.exports =router;