const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const stringify = require('json-stringify-safe')
const User = require('../models/models')
users.use(cors())

process.env.SECRET_KEY = 'secret'


users.get('/getAllRecords',(req,res)=>{
    // let offset = 0;

User.findAndCountAll().then((data) => {
    // let limit = 50;   // number of records per page
    let limit=10
    let page = req.params.page;      // page number
    let pages = Math.ceil(data.count / limit);
    // console.log(pages)
		offset = limit * (page - 1);
    // console.log(data)
      res.send({"perpage":pages ,'result': data, 'count': data.count,"offset":offset})
  })
  .catch(function (error) {
		res.status(500).send('Internal Server Error');
	});
  
   

})



users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    //TODO bcrypt
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status:'User Registered!' })
            })
            .catch(err => {
              res.status(400).json({error:err.message})
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send({status:"Ok",token:token})
        }
        else{
            res.status(400).json({ error: 'Wrong_password' })
        }
        
      } else {
        res.status(400).json({ error: 'User_Not_Found' })
        
      }
    })
    .catch(err => {
      res.status(400).json({ error: err.message })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users