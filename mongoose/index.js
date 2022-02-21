const express=require('express');
const Product=require('./product');
require('./config');
const app=express();

app.use(express.json());

app.post('/add',async(req,res)=>{    
    const data=new Product(req.body);
    const result=await data.save();
    console.log(result);
    res.send(result);
})

app.get('/find',async(req,res)=>{
    const data=await Product.find();
    res.send(data);
})

app.delete('/delete/:_id',async(req,res)=>{
    const data=await Product.deleteOne(req.params);
    res.send(data);
})

app.put('/update/:_id',async(req,res)=>{
    const data=await Product.updateOne(req.params,{$set:req.body})
    res.send(data);
})

app.get('/search/:key',async(req,res)=>{
    const data=await Product.find(
        {
           "$or":
            [
               { "name":{$regex:req.params.key}},
               { "category":{$regex:req.params.key}}
            ]
        }); 
        res.send(data);
})
app.listen(5000)