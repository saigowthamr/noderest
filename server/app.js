var mong  = require('mongoose');

mong.Promise = global.Promise;

mong.connect('mongodb://test:test@ds133597.mlab.com:33597/sainode',
{ useMongoClient: true })


module.exports ={
    mong
}