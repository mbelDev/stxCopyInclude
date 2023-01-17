const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
  // res.send("Hello, Mr. Wellcomeback.");
  //   res.sendFile(path.join(__dirname, "html/index.html"));
  res.render("index");
});
app.get("/vision", function (req, res) {
  res.render("vision", { subtitle: "vision" });
});
app.get("/leadership", function (req, res) {
  res.render("leadership", { subtitle: "leadership" });
});
app.listen(3000, function () {
  console.log("server is ready by port no.3000");
});
