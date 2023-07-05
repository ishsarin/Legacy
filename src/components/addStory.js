import React, { useEffect, useState } from "react";
import { storage } from "../models/user.model.js";
import HomePage from "./homePage.js";
const AddStory = () => {
  let imgUrl;
  // const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    window.location.href = "/";
    const res = await fetch("/add_story", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // id: uniqid(),
        text: e.target.textarea.value,
        name: e.target.name.value,
        relation: e.target.relation.value,
        file: imgUrl,
      }),
    });

    const data = res.json();
    if (data.status === 500) console.log("Error");
  };

  const uploadFile = (e) => {
    e.preventDefault();
    if (image == null) return;

    const imgRef = storage.child(`img/${image.name}`);
    imgRef
      .put(image)
      .then((snapshot) => {
        return imgRef.getDownloadURL().then((url) => {
          // url is the download URL
          imgUrl = url;
          console.log(imgUrl);
        });
      })
      .catch((error) => {
        // deal any errors
        console.log("error");
      });
    alert("Image Uploaded");
    // console.log(image.name);
  };
  const [image, setImage] = useState(null);
  return (
    <form onSubmit={handleSubmit} action="/">
      <div class="mb-3 p-3">
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="10"
          placeholder="Tell you Story!!"
        ></textarea>
      </div>
      <div class="mb-3">
        <label class="form-label p-2">Name</label>
        <input type="text" placeholder="Enter your Name" required name="name" />
      </div>
      <div class="mb-3 ">
        <label htmlFor="" form-label className="p-2">
          Relation
        </label>
        <input type="text" placeholder="Your Relation" name="relation" />
      </div>
      <div class="mb-3 ">
        <label htmlFor="" form-label className="p-2">
          Share this moment by uploading a picture!!{" "}
        </label>
        <input
          type="file"
          name="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <button onClick={uploadFile}>upload</button>
      </div>

      <button class="btn btn-primary w-10" type="submit">
        Post
      </button>
    </form>
  );
};

export default AddStory;
