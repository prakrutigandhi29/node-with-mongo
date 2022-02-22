const {MongoClient}=require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'e-comm';

const dbConnect= async()=>{
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db.collection('products');;
}
module.exports=dbConnect;
