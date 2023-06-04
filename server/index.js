const express = require('express')
const userRoute=require('./routes/users')
const dbConnect = require('./db/dbconnect')

const app = express()
require('dotenv').config()
 const port = process.env.PORT || 8848  //const port = 8848 

// Connect to MongoDB
dbConnect()  
app.use(express.json({limit:'50mb'}));
// Route
app.use("/user",userRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
