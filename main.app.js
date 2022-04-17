var express = require('express')
var bodyParser = require('body-parser')
var http = require('http')
var path = require('path')

var indexController = require('./server/controller/indexController')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'dist/capg-project')))

app.use('/webapi',indexController)

app.use('*',(req,res)=>{
    var mypath = path.join(__dirname,'dist/capg-project/index.html')
    res.sendFile(mypath)
})

http.createServer(app).listen(3000,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Server Invoked at 3000 port')
    }
})