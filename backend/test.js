const express=require("express")
const MongoClient=require("mongoose")
const dotEnv=require("dotenv")
const bodyParser=require("body-parser")
const employeeroutes=require('./routes/employeeroutes')
const app=express();

app.use(bodyParser.json());

dotEnv.config();
const PORT=process.env.PORT || 5555;

MongoClient.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB Atlas Cloud connected successfully")
})
.catch((err)=>{
    console.log(err)
})


app.use("/emplyees",employeeroutes);
app.listen(PORT,()=>{
    console.log(`My port is running on ${PORT} number`)
})