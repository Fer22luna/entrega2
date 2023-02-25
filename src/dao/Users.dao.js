const Product = require("./model/Products.model");



class UsersDao {

    async find(limit,page,sort,title){

        /*
        if(sort === null){
        
            const response = await Product.paginate({title : title},{limit:Number(limit),page:Number(page)})

            return response
        }     
        */


        const query =  {title}
        const option = {limit:Number(limit),page:Number(page),sort:{ price: sort.toLowerCase()}}

        console.log(query)
        const response = await Product.paginate({title:"Electra"}, option)


        const nextLink = `http://localhost:3030/products?limit=${limit}&page=${response.nextPage}&sort=${sort}&title=${title}`

        const  prevLink = `http://localhost:3030/products?limit=${limit}&page=${response.prevPage}&sort=${sort}&title=${title}`


        if(response.docs.length === 0){
            var status = "error" 
        }else{
            var status = "success"
        }

        const newResponse ={
            status,
            ...response,
            prevLink,
            nextLink
            
        }

        return newResponse 

    
    }

    async insertMany(ProductInfo){

     const response = await Product.insertMany(ProductInfo)
     return response
    }


}

module.exports = UsersDao

