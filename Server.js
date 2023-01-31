const express=require('express');
const app=express();
//const mysql=require('mysql');
const _=require('lodash');
const bodyParser=require('body-parser');
const cors=require('cors');
const socketIO=require('socket.io');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

const server=app.listen(3500,()=>{
console.log('nodejs is running on port 3500')
})

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"food",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected mysql database!");
});

app.get("/api/food",(req,res)=>{

    var foodtest=_.get(req,['body','te']);

    console.log("foodtest==>",foodtest);

    try{

        if(foodtest){
            return res.status(200).json({
                Code:200,
                Message:"Success",
                Log:2
                });
        }else{
        return res.status(200).json({
            Code:200,
            Message:"Bad Invalid Request !",
            Log:1
            });
        }

    }catch(error){
console.log('Error! =>',error);
return res.status(400).json({
RespCode:400,
RespMessage:"Error",
Log:0
});
    }




})

module.exports =app;