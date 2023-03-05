const express = require('express');

const router = express.Router();

// /admin/product-page =>get
router.get('/product-page', (req, res, next) => {
  console.log("This is Product");
  res.send(
    "<form action='admin/product-page' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

// /admin/product-page =>POST
router.post('/product-page', (req, res, next) => {
  //   console.log("In another middleware");
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;