

var {mong} = require('./app');


var tod = mong.Schema({
   text:{
       type:String,
       required:true,
       minlength:1,
       trim:true
   },
   completed:Boolean,
   at:Boolean
})

var Todo = mong.model('Todo',tod)

module.exports = Todo;
