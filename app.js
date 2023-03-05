const express = require("express");
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes=require('./routes/shop')

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

//404 Eror page not found route
app.use((req, res, next) => {
  res.status(404).send("<h1 style='color:red'>PAGE NOT FOUND</h1>")
})

app.listen(3000);
