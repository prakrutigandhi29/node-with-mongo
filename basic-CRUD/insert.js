const dbConnect=require('../mongoconfig');
const insertData=async()=>{
    let db=await dbConnect();
   const result=await db.insert([{name:'s5',brand:'samsung',price:'34000',category:'mobile'}]);
    console.log(result);
}
insertData();