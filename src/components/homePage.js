import React, { useEffect, useState } from "react";
import { storage } from "../models/user.model.js";
import AddStory from "./addStory.js";
import Post from "../pages/Post.jsx";
import "../style.scss";
import NavBar from "./navBar.jsx";
const HomePage = (props) => {
  const fetchData = async (e) => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    // console.log(data);
    setInfo(data);
  };

  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <NavBar />
      <h1 className="main-header">The Legacy Continues</h1>

      <Post info={info} />
    </>
  );
};

export default HomePage;
