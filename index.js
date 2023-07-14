const {connectDB}  =  require('./src/Connection/DBConnect');
const port = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express()
// const fileUpload = require('express-fileupload');


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectDB()

//Importing route
const userRoutes = require("./src/modules/user/user.routes");

app.use("/user", userRoutes);

app.get('/', (req , res) => {
  res.send('Hello World!')
  // throw new ApiError(400, 'This is an Error')
    
})
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})

