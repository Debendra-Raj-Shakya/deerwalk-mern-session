const productData=require('../data/productData.json')

const express=require('express')
const router=express.Router()


router.get('/api/products',(req,res)=>res.json(productData))

router.get('/api/products/1',(req,res)=>res.json(productData[0]))

module.exports=router