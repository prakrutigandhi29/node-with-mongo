const dbConnect=require('../mongoconfig');
const deleteData=async()=>{
    let db=await dbConnect();
    const result=await db.deleteMany({name:'s5'});
    console.log(result);
}
deleteData();