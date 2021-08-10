const express = require("express");

const Graphic = require('./models/GraphicModel')

const app =  express();
const db = require("./db.js"); 





app.use(express.json());

const path = require('path')
const userRoute = require('./routes/userRoute')

const ordersRoute = require('./routes/ordersRoute') 
 



const GraphicsRoutes = require('./routes/GraphicsRoutes')

app.use('/api/graphics/',GraphicsRoutes)
app.use('/api/users/' ,userRoute)
app.use('/api/orders/' , ordersRoute)

if(process.env.NODE_ENV === 'productions')
{
    app.use('/ ',express.static('client/build'))

    app.get('*' , (req,res)=>{

        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}



 
const port = process.env.PORT || 5000;
app.listen(port,()=> 'server running on port 🔥');

