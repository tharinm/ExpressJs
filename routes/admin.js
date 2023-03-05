const express = require('express');

const router = express.Router();

router.get("/product-page", (req, res, next) => {
  console.log("This is Product");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

router.post("/product", (req, res, next) => {
  //   console.log("In another middleware");
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;