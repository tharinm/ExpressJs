const express = require("express");

const adminRoutes = require('./routes/admin');
const shopRoutes=require('./routes/shop')

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

//404 Eror page not found route
app.use((req, res, next) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>")
})

app.listen(3000);
