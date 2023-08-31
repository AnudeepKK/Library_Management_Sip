const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route.js")
const cors = require("cors")

const app = express()
app.use(express.json());
app.use("/",route);
app.use(cors())

//DB Connection
mongoose.connect("mongodb+srv://anudeepkk2003:anudeep2003@cluster0.iesl0sk.mongodb.net/books")
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
});

app.listen(3500,()=>{
    console.log("Server Connected on 3500");
});