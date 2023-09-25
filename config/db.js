const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://newayel434:vgMQKVMYljfX3PeJ@cluster0.hadzhu1.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log("error");
})
