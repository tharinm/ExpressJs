

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //allow the request to coontinue to the next middleware inline
});

app.use((req, res, next) => {
    console.log("In another middleware");
    res.send('<h1>Hello From Express</h1>')
});


app.listen(3000);
