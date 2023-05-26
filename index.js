const express=require('express');
const bodyParser=require('body-parser')

//routes
const UserRoutes=require('./routes/UserRoutes.js')

const app=express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
require("./utils/database.js") 

app.use('/',UserRoutes)

app.listen(5000,()=>
    console.log("Running at 5000")
)
