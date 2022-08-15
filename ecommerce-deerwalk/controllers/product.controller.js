const productcontroller = (req, res) => {
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
};

module.exports = productcontroller;
