var Todo = require('./server')


var express = require('express')
var bodyParser = require('body-parser');


var app = express();


const port = process.env.PORT || 3000
app.use(bodyParser.json())


app.post('/todos',(req,res)=>{

     var todo = Todo({
         text:req.body.text,
         completed:req.body.completed,
         at:req.body.at
     })

     todo.save().then(doc=>{
         res.send(doc)
     },err=>{
         res.status(400).send(err)
     })

})

app.get('/todos',(req,res)=>{
     Todo.find().then((data)=>{
         res.send(data)
     },(err)=>{
         res.send(err)
     })
})

app.get('/todos/:id',(req,res)=>{

      Todo.findById({_id:req.params.id}).then(dat=>{
          res.send(dat)
      },err=>{
          res.status(400).send(err)
      })

})


app.delete('/todos/:id',(req,res)=>{
    Todo.remove({_id:req.params.id}).then((dat)=>{
        res.send(dat)
    },(err)=>{
        res.send(err)
    })
})


app.listen(port,()=>{

    console.log(`Started at ${port}`)
});


module.exports = {
    app
}