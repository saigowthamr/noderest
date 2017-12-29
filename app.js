
var mong = require('mongoose');

mong.connect('mongodb://test:test@ds133597.mlab.com:33597/sainode',
{ useMongoClient: true })

mong.Promise = global.Promise;

var king = mong.Schema({
    name:String,
    age:Number
})

var King = mong.model('King',king)


module.exports = King;
// var silen = King({
//     name:'saigowyt',
//     age:21
// })

// silen.save(function(err,data){
//     if(err){
//         console.log('Something wnet wrong')
//     }else{
//         console.log(data)

//     }

// })

// var data ={
//     name:'kings',
//      age:21
// }
// King.findById({_id:'5a44c5c19f08bc02e41dc0cf'},function(err,data){
//     if(err){
//         console.log('error foun d')
//     }else{
//         console.log(data)
//     }
// })

// King.remove({_id:'5a44d128755e3f033839d175'},function(err,dat){
//     if(err){
//         console.log('error fun ')
//     }else{
//         console.log('Success fully remove')
//     }
// })