const express = require('express')
const users = express.Router()
const cors = require('cors')
const bcrypt = require('bcrypt')
const User = require('../models/employeemodel.js')

users.use(cors())

process.env.SECRET_KEY = 'secret'


users.get('/getAllRecords',(req,res)=>{
    // let offset = 0;
    // let limit=req.params.limit
    const match = {}

    if(req.query.phoneNumber){

        match.phoneNumber = req.query.phoneNumber
    }
    if(req.query.first_name){
        
        match.first_name = req.query.first_name
    }
    if(req.query.salary){
        match.salary = req.query.salary
    }
    if(req.query.email){
        match.email = req.query.email
    }
    console.log(match)
User.findAndCountAll({where:match}).then((data) => {
    // let limit = 50;   // number of records per page
    console.log(match)
   try{ 
    if (data){
    let limit=10
    let page = req.params.page;      // page number
    let pages = Math.ceil(data.count / limit);
    // console.log(pages)
		offset = limit * (page - 1);
    // console.log(data)
    console.log(data.count)
    if(!data.count==0){
      res.send({"perpage":pages ,'result': data, 'count': data.count,"offset":offset})
    }
    else{
        res.send({data:"No Data"})
    }
    }
   
   }
   catch(err){
       res.status(404).json({err:"No data"})
   }
})
  .catch(function (error) {
		res.status(500).send('Internal Server Error'+error.message);
	});
  
   

})

// users.post('/filter',(req,res)=>{
// let first_name=req.params.first_name;
// let phoneNumber=req.params.phoneNumber;
// let options={where:{}};
// if(first_name){
// options.where.first_name=first_name
// }
// if(phoneNumber){
//     options.where.phoneNumber=phoneNumber
//  }
//  console.log(options)
// User.findAndCountAll(options).then(data=>{
// // console.log(data)
// res.status(200).send(data)
// }
// ).catch(err=>{
//     console.log(err.message)
// })  
// })

users.post('/create',(req,res)=>{

    
    const today = new Date()
    const userData ={
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            phoneNumber:req.body.phoneNumber,
            salary:req.body.salary,
            created: today
          }
bcrypt.hash(req.body.password, 10, (err, hash) => {
userData.password = hash
User.create(userData).then(user =>{
res.status(201).json({status:'User created succesfully'})
}).catch(err=>{
res.status(400).json({error:err.message})
})
})  
})

users.post('/:id/delete',(req,res)=>{
    const id = req.params.id;
    User.destroy(
       { where: {id: id} }
    ).then(user =>{
       res.json({status:"Employee Deleted"}) 
    }).catch((err)=>{
        console.log(err.message)
    })

})
users.post('/:id/update',(req,res)=>{
    const id = req.params.id;
    const today = new Date();
    const first_name= req.body.first_name;
    const last_name= req.body.last_name;
    const email=req.body.email;
    const password=req.body.password;
    const salary= req.body.salary;
    const phoneNumber=req.body.phoneNumber;
    const created=today
User.update(
{
    first_name   : first_name,
    last_name    : last_name,
    email        : email,
    password     : password,
    phoneNumber  : phoneNumber,
    salary       : salary,
    created      : created
},
{returning: true, where: {id: id} }
)
    .then(user =>{
        res.status(200).json({status:'Data updated'})    
    })
.catch((err)=>{
res.status(500).json({error:err.message})
});    
})

module.exports = users