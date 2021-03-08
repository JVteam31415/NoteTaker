//import what we need
const express = require("express")
//require routes
const htmlRoutes = require("./routes/htmlRoutes.js")

const apiRoutes = require("./routes/apiRoutes.js")
//INitialize application, create port
const app = express();

const PORT = process.env.PORT || 3000;
//setting up body parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//bring in routes
app.use("/api",apiRoutes);
app.use("/", htmlRoutes);

//start server
app.listen(PORT, ()=> console.log(`App is running on port: ${PORT}`))