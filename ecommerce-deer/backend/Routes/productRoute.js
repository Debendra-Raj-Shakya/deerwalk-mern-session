const productData = require("../data/productData.json");

const express = require("express");
const { query } = require("express");
const router = express.Router();
const {productcontroller,returnSingleProduct,createProduct,updateProduct,deleteProduct,patchedProduct}=require('../controllers/productcontroller')
router.get("/",productcontroller);
router.get('/:productID',returnSingleProduct)
router.post('/',createProduct)
router.put('/:productID',updateProduct)
router.delete('/:productID',deleteProduct) 
router.patch('/:productID',patchedProduct)

// router.get("/:id", (req, res) => {
//   console.log(req.params);
//   const pid = req.params.id;
//   res.json(productData[pid]);
// });

module.exports = router;
