const express = require("express");
const router = express.Router();

router.post("/Products",(req,res)=>{
    const {id,title,price,category,description,image} = req.body;
    res.json({
         id:id,
         title:title, 
         price:price, 
         category:category, 
         description:description, 
         image:image
    })
})

module.exports = router;