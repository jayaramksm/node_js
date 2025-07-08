// require('./practice/index')

const express = require("express");
const routes = require("./routes/userRoute");
const errorHandler = require("./middleware/errorHandler");
const DB_Connection = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();

DB_Connection();

const PORT = process.env.PORT ||  8000;

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `*`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `*`);
    next();
};


app.use(express.json());

app.use(allowCrossDomain);
app.use("/api/users", routes);
app.use("/api/login", require("./routes/loginRoute"));
app.use(errorHandler);


app.listen(PORT,()=>{
    console.log("port runnimg in ", PORT);
    
})
