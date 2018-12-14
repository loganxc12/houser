const express = require("express");
const bodyParser = require("body-parser");
const controller = require("./controller");
const massive = require('massive');
require('dotenv').config();

const app = express();
const PORT = 4001;
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => { 
     app.set("db", dbInstance); 
}).catch(error => console.log("error in massive connection", error));

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.postHouse);
app.delete("/api/houses/:id", controller.deleteHouse);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));