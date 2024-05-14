const express = require('express');
const app = express();


const publicRoutes = require('../routes/publicRoutes')
const adminRoutes = require('../routes/adminRoutes')
const userRoutes = require('../routes/userRoutes')



app.use('/',publicRoutes)
app.use('/',adminRoutes)
app.use('/',userRoutes)




app.listen(3000,()=>{
    console.log("listening on http://localhost:3000/")
})
