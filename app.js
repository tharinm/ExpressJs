const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/product-page", (req, res, next) => {
  console.log("This is Product");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

app.use("/product", (req, res, next) => {
//   console.log("In another middleware");
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>Hello From Express</h1>");
});

app.listen(3000);
