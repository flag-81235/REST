// //  COMMON JS
// const x = require("examplePackage");
// //  ES6
// import x from "examplePackage";

const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    res.send("Hello there!");
});

app.get("/about", function(req, res) {
    res.send("lalalalalalalalalal");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});