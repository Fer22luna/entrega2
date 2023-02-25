const { Router } = require("express")
const FileDao = require("../dao/FIle.dao")
const UsersDao = require("../dao/Users.dao")

const fileManager = new FileDao("products.json")
const Product = new UsersDao()

const router = Router()


router.get("/", async (req,res) =>{

   try {

      const { limit = 10, page = 1, sort= null, title } = req.query
      console.log(limit,page,sort,title)
      const response = await Product.find(limit,page,sort,title)

      res.json({message:response})
   } catch (error) {
      
   }
   
})

router.post("/", async (req,res) =>{

 try {
    const products = await fileManager.loadItems()
    const response = await Product.insertMany(products)
    res.json({message:response})
 } catch (error) {
    res.json({error})
 }
})

module.exports = router