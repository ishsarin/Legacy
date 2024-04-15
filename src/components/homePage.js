import React, { useEffect, useState } from "react";
import Post from "../pages/Post.jsx";
import "../style.scss";
import NavBar from "./navBar.jsx";

const HomePage = (props) => {
  const fetchData = async (e) => {
    // const res = await fetch("http://localhost:5000/");
    const res = await fetch("https://legacy-nxxp.onrender.com/");
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
