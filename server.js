// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App 
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
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

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    //route to the home screen
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    //route to the add reservation screem
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/customers", function(req, res) {
  return res.json(customers);
});

// Displays a single character, or returns false
app.get("/api/customers/:customer", function(req, res) {
  var chosen = req.params.customer;

  console.log(chosen);

  for (var i = 0; i < customers.length; i++) {
    if (chosen === customers[i].routeName) {
      return res.json(customers[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/customers", function(req, res) {
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
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
