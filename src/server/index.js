import express from "express";

// const express = require("express");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) => {
  console.log("request arrived");
  res.send({ username: "Person" });
});
app.listen(8080, () => console.log("Listening on port 8080!"));
