const productModel=require("../models/Product")


const productcontroller = async (req, res) => {
  console.log('Hi')
  try{
  const productData = await productModel.find()

  console.log(productData)
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
} catch(err) {
  res.send(err)
}
};

module.exports = productcontroller;
