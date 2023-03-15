// Initialize constant
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Configure & Import environment variables
require('dotenv').config();
let host = process.env.HOST;
let port = process.env.PORT;
let db_host = process.env.CONN_STR;

//Connect to MongoDB using Mongoose connnection string
mongoose.connect(`${db_host}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("Database Connected!")
})
.catch(err => {
    console.log("Database Error!")
    console.log(err)
})

//Setup a schema for the destination objects
const destinationSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    link: String
});

//Create destination object
const Destination = mongoose.model("Destination", destinationSchema);

//Configure view-engine to expect ".ejs" files
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landingPage");
});

//INDEX- Show all destinations in the database
app.get("/destinations", function (req, res) {

    //GET all destinations from the database
    Destination.find({}, function (err, allDestinations) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("destinations", { destinations: allDestinations });
        }
    })
});

app.post("/destinations", function (req, res) {
    //COLLECT user input using a form
    let image = req.body.newURL;
    let name = req.body.newName;
    let description = req.body.newDescription;
    let link = req.body.newLink;
    let newDestination = { image: image, name: name, description: description, link: link };     //Temporary variable containing data of newCampground

    //CREATE a new destination using the form and ADD it to the database
    Destination.create(newDestination, function (err, newCreated) {
        if (err) {
            console.log(err);
        }
        else {
            //Redirect to the "updated" destinations page
            res.redirect("/destinations");
        }
    });
});

//Display a form to start adding a new destination
app.get("/destinations/new", function (req, res) {
    res.render("newDestination");
});

//Launch web server and start listening at port 3000
app.listen(port, host, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port ", port);
})