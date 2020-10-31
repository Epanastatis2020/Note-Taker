//------------------------------------------------
// Setting dependencies
//------------------------------------------------

const express = require("express");
const path = require("path");

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
app.use(express.static(path.join(__dirname, "public")));

//------------------------------------------------
// Setting up server to use route files
//------------------------------------------------

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//------------------------------------------------
// Starting the server and listening
//------------------------------------------------

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
})