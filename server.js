//------------------------------------------------
// Setting dependencies
//------------------------------------------------

const path = require("path");
const express = require("express");

//------------------------------------------------
// Setting express app
//------------------------------------------------

let app = express();

let PORT = process.env.PORT || 4000;

//------------------------------------------------
// Setting up data parsing for express app
//------------------------------------------------

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//------------------------------------------------
// Setting routes
//------------------------------------------------