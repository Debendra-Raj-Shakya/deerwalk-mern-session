const productData = require("../data/productData.json");

const express = require("express");
const { query } = require("express");
const router = express.Router();

router.get("/", (req, res) => {
//    const query=req.query
//     console.log(typeof query)
if(req.query.category &&req.query.price){
    let queryfilter=productData.filter((product)=>product.category==req.query.category && req.query.price==product.price ) 
    res.json(queryfilter)
    return
}
if(req.query.category ){
    let queryfilter=productData.filter((product)=>product.category==req.query.category  ) 
    console.log(queryfilter)
  res.json(queryfilter);
  return;

} if( req.query.price){
    let queryfilter=productData.filter((product)=>req.query.price==product.price ) 
    res.json(queryfilter)
    return;

}

  res.json(productData);


});

// router.get("/:id", (req, res) => {
//   console.log(req.params);
//   const pid = req.params.id;
//   res.json(productData[pid]);
// });

module.exports = router;
