var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3005;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var booked = [];
var waiting = [];

// ROUTES
// GET / -> index.html = info about the restaurant
// GET /reservation = makeres.html
// GET /tables -> = waitlist.html

app.listen(PORT, function () {
console.log("App listening on PORT " + PORT);


})

var customers = [
  {
    routeName: "Customer1",
    name: "Steve",
    phone: "555-5555",
    reservationTime: "07:00pm"
  },
  {
    routeName: "Customer2",
    name: "Abhishu",
    phone: "333-5555",
    reservationTime: "07:30pm"
  },
  {
    routeName: "Customer3",
    name: "Tom",
    phone: "444-5555",
    reservationTime: "08:00pm"
  },
  {
    routeName: "Aaron",
    name: "Steve",
    phone: "525-5555",
    reservationTime: "08:30pm"
  }];


// Routes
// =============================================================
app.use(express.static("public"))

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  //route to the home screen
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/reservation", function (req, res) {
  //route to the add reservation screem
  res.sendFile(path.join(__dirname, "/public/makeres.html"));
});

app.get("/public/waitlist", function (req, res) {
  // view all of the reservations
  res.sendFile(path.join(__dirname, "/waitlist.html"));
});




// Create New Characters - takes in JSON input
app.post("/api/customers", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCustomer = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCustomer.routeName = newCustomer.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCustomer);

  characters.push(newCustomer);

  res.json(newCustomer);
});

// Starts the server to begin listening
// =============================================================
