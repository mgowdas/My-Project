const { rejects } = require('assert')
const { resolve } = require('dns')
var db = require('./connection')

function indexModel(){
    this.userSignUp=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().sort({'_id':-1}).toArray((err,result)=>{
                if(err)
                    reject(err)
                else
                {
                    var _id    
                    if(result.length==0)
                        _id=1
                    else
                        _id=result[0]._id+1
                    
                    var flag=1    
                    for(let row of result)
                    {
                        if(userDetails.email==row.email)
                            flag=0        
                    }    

                    if(flag==1)
                    {   

                     db.collection(collection_name).insertOne(userDetails,(err,result)=>{
                        err ? reject(err) : resolve({'status':1});    
                     })
                    }
                    else
                        resolve({'status':0})          
                }        
            })
        })    
    }

    this.userSignIn=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find({'email':userDetails.email,'password':userDetails.password}).toArray((err,result)=>{
                err ? reject(err) : resolve(result); 
            })
        })        
    }

    this.members=(collection_name,userDetails)=>{
        return new Promise((resolve,reject)=>{
            db.collection(collection_name).find().toArray((err,result)=>{
                err ? reject(err) : resolve(result); 
            })
        })
    }

    

}

module.exports = new indexModel()