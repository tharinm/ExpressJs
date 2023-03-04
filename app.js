

const express = require("express");

const app = express();

app.use("/product-page", (req, res, next) => {
    console.log("This is Product");
     res.send("<h1>Hello From Product</h1>");
});


app.use('/',(req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello From Express</h1>');
});




app.listen(3000);
