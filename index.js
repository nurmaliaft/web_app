const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Halaman utama
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Halaman form
app.get("/form", (req, res) => {
  res.render("form");
});

// Handle submit form
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`Data Diterima: Nama - ${name}, Email - ${email}`);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
