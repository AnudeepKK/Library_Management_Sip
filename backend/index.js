const express = require("express")
const mongoose = require("mongoose")
const route = require("./routes/route.js")
const cors = require("cors")

const app = express()
app.use(express.json());
app.use("/",route);
app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/Create_user.js'))


//DB Connection
mongoose.connect("mongodb+srv://nishanthbhat18:meowmeow@cluster0.rgvqsc8.mongodb.net/CS_4B")
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log(err);
});

app.listen(3500,()=>{
    console.log("Server Connected on 3500");
});