var mongoose = require('mongoose')
var  url = 'mongodb://localhost:27017/sprint1project'

mongoose.connect(url)
var db = mongoose.connection
console.log('Server connected to mongodb successfully')

module.exports = db