var express = require('express')
var router = express.Router()
var indexModel = require('../model/indexModel')
var jwt = require('jsonwebtoken')

router.get('/',(req,res,next)=>{
    res.send('<h1>URL route invoked</h1>')
})

router.post('/userSignUp',(req,res,next)=>{
    var collection_name='register';
    indexModel.userSignUp(collection_name,req.body).then((result)=>{
        if(result.status==1)
            res.json({'response':'User register successfully'})
        else
            res.json({'response':'User already exists , please try with new'})            
    }).catch((err)=>{
        res.json({'response':'Registration failed'})
    })        
})

router.post('/userSignIn',(req,res,next)=>{
    var collection_name='register';
    indexModel.userSignIn(collection_name,req.body).then((result)=>{ 
        var payload = {'subject':result[0]._id}
        var token = jwt.sign(payload,"hjendknans")
        res.json({'token': token, 'userInfo':result[0]})
    }).catch((err)=>{
        res.json({'token':'error'})
    })
})

router.post('/Members',(req,res,next)=>{
    var collection_name='register';
    indexModel.members(collection_name,req.body).then((result)=>{ 
        res.json({'userInfo':result})
    }).catch((err)=>{
        res.json({'response':'error'})
    })
})



module.exports = router