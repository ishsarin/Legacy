import express from "express";
import { User } from "../src/models/user.model.js";
import cors from "cors";
import { collection, doc, addDoc } from "firebase/firestore";

import { query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../src/models/user.model.js";

// const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// const User = require("../src/models/user.model");
// const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  // console.log(req.body);
  // const snapshot = await User.orderBy("createat", "desc").get();
  const orderedQuery = query(User, orderBy("timestamp", "desc"));

  // const snapshot = await User.orderBy("timestamp", "desc").get();

  const snapshot = await getDocs(orderedQuery);

  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list);
});

app.post("/add_story", async (req, res) => {
  //adding the data provided at /add_story to firebase
  const data = req.body;

  const docRef = await addDoc(collection(db, "Users"), data);
  // await setDoc(doc(db, "Users"), data);

  console.log("user added");
  // }
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
