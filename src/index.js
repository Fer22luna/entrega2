const express = require("express")
const router = require("./router/index")
const mongoose = require("mongoose")
const handlebars = require("express-handlebars")

const app = express()
const port = 3030

app.use(express.json())

router(app)

app.engine("handlebars", handlebars.engine())
app.set("views",__dirname + "/views")
app.set("view engine", "handlebars")

mongoose.set("strictQuery", false)

mongoose.connect("mongodb+srv://admin:admin@codercluster.e299zch.mongodb.net/ecommerce?retryWrites=true&w=majority", error =>{
    if(error){
        console.log(`Error : ${error}`)
    }
})


app.listen(port, () =>{
    console.log(`Server running at port : ${port}`)
})