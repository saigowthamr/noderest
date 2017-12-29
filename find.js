var  King = require('./app.js')


King.find().count().then((res)=>{
    console.log('COOUNT'+res)
},err=>{
    console.log(err)
})