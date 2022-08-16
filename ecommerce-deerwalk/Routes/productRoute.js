const productData = require("../data/productData.json");

const express = require("express");
const { query } = require("express");
const router = express.Router();
const productcontroller=require('../controllers/productcontroller')
router.get("/",productcontroller);

// router.get("/:id", (req, res) => {
//   console.log(req.params);
//   const pid = req.params.id;
//   res.json(productData[pid]);
// });

module.exports = router;
