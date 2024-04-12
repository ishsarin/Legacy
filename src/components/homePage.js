import React, { useContext, useEffect, useState } from "react";
import { storage } from "../models/user.model.js";
import AddStory from "./addStory.js";
import Post from "../pages/Post.jsx";
import "../style.scss";
import NavBar from "./navBar.jsx";
import UserContextProvider, {
  UserContext,
} from "../context/UserContextProvider.jsx";

const HomePage = (props) => {
  const fetchData = async (e) => {
    const res = await fetch("http://localhost:5000/");
    const data = await res.json();
    // console.log(data);
    setInfo(data);
  };

  const { user } = useContext(UserContext);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <NavBar />
      <div className="main-header">
        <div>
          The greatest legacy one can pass on to one's children and
          grandchildren is not money....
        </div>
        <div>but rather a legacy of character and faith.</div>
      </div>

      <Post info={info} />
    </>
  );
};

export default HomePage;
