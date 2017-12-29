var King = require('./app');




// King.findOneAndUpdate({age:33},{
// $set:{
//     name:'king'
// }
// }
// ,{
//     returnOriginal:false

// }).then((res)=>{

// console.log(res)
// })

King.findOneAndUpdate({age:35},
{
    $inc:{
        age:1
    },
    $set:{
        name:'sai'
    }
},
{
    returnOriginal:false
})
.then(res=>{
    console.log(res)
})