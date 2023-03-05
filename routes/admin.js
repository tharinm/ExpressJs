const path = require('path'); 
const express = require('express');

const router = express.Router();

// /admin/product-page =>get
router.get('/add-product', (req, res, next) => {
  console.log("This is Product");
  res.sendFile(
   path.join(__dirname,'../','views','add-product.html')
  );
});

// /admin/product-page =>POST
router.post('/add-product', (req, res, next) => {
  //   console.log("In another middleware");
  console.log(req.body);
  res.redirect("/");
});


module.exports = router;