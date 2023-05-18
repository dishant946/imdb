const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT || 3000;
app.use(express.static(path.joint(__dirname,'./client/build')));
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
app.listen(3000,()=>{
    
});