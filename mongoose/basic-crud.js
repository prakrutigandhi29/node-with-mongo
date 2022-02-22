const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const ProductSchema=new mongoose.Schema({name:String,brand:String,category:String,price:Number})
const ProductModel=mongoose.model('products',ProductSchema);    

const addData=async()=>{
   const data=new ProductModel({name:'galaxy s6',brand:"samsung",category:"mobile",price:30000})
   const result= await data.save();
}
const updateData=async()=>{
   const data= await ProductModel.updateOne({name:'aircase'},{$set:{name:'airpods'}}) 
   console.log(data);

}
const deleteData=async()=>{
    const data= await ProductModel.deleteMany({name:'galaxy s7'}) 
    console.log(data); 

}
const findData=async()=>{
    const data= await ProductModel.find(); 
    console.log(data); 

}
findData();
