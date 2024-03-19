import React, { useEffect, useState } from "react";
import { storage } from "../models/user.model.js";
import AddStory from "./addStory.js";
import Post from "../pages/Post.jsx";
import "../style.scss";
const HomePage = (props) => {
  const fetchData = async (e) => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    console.log(data);
    setInfo(data);
  };

  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>The Legacy Continues</h1>
      <a className="btn btn-primary p-3 m-2" href="/add_story">
        Share your Story!!
      </a>
      <Post info={info} />
    </>
  );
};

export default HomePage;
