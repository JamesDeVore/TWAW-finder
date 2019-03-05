const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router");
const cors = require("cors");

// DB 
// mongoose.connect(keys.MONGODB_URI);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  console.log("ran here")
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
