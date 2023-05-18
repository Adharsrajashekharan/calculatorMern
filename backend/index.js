const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app=express()
app.use(express.json())
MONGO_URL="mongodb+srv://Pranav:Pranav1!@shoplifter.k1oygu5.mongodb.net/calculatorMern"
mongoose.connect(MONGO_URL).then(()=>console.log("Db connected")).catch(()=>console.log("error in db"))




app.use(cors())
const calcRoute=require('./routers/calcRoutes')
app.use('/',calcRoute)



app.listen(5000,()=>console.log("listening on 5000"))