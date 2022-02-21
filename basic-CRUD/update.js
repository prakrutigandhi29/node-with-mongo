const dbConnect=require('../mongoconfig');
const updateData=async()=>{
    let db=await dbConnect();
    const result=await db.update({name:'s5'},{$set:{price:5000}});
    console.log(result);
}
updateData();