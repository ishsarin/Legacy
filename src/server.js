import express from "express";
import User from "../src/models/user.model.js";
import cors from "cors";
// const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// const User = require("../src/models/user.model");
// const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  // console.log(req.body);
  const snapshot = await User.get();

  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/add_story", async (req, res) => {
  const data = req.body;
  await User.add(data);
  console.log("user added");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
