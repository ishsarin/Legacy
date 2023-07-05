import React, { useEffect, useState } from "react";
import { storage } from "../models/user.model.js";
import AddStory from "./addStory.js";
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
      {info.map((data) => (
        <div className="p-3 homepage_comments" key={data.id}>
          <div>{data.text}</div>
          {data.file === "" ? (
            ""
          ) : (
            <img src={data.file} thumbnail fluid className="p-3" width={400} />
          )}
          <h6>{data.name}</h6>
        </div>
      ))}
    </>
  );
};

export default HomePage;
