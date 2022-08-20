const ProductModel = require("../models/Product");
const productModel = require("../models/Product");

const productcontroller = async (req, res) => {
  console.log("Hi");
  try {
    const productData = await productModel.find();

    console.log(productData);
    if (req.query.category && req.query.price) {
      let queryfilter = productData.filter(
        (product) =>
          product.category == req.query.category &&
          req.query.price == product.price
      );
      res.json(queryfilter);
      return;
    }
    if (req.query.category) {
      let queryfilter = productData.filter(
        (product) => product.category == req.query.category
      );
      console.log(queryfilter);
      res.json(queryfilter);
      return;
    }
    if (req.query.price) {
      let queryfilter = productData.filter(
        (product) => req.query.price == product.price
      );
      res.json(queryfilter);
      return;
    }

    res.json(productData);
  } catch (err) {
    res.send(err);
  }
};

const returnSingleProduct = async (req, res, next) => {
  const { productID } = req.params;

  const productData = await ProductModel.find({ _id: productID });
  res.json(productData);
};

const createProduct = async (req, res, next) => {
  try {
    const result = await productModel.create(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const updateProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {};
const patchedProduct = async (req, res) => {};
module.exports = {
  productcontroller,
  returnSingleProduct,
  patchedProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
