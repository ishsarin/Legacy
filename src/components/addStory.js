import React, { useState } from "react";
import { storage } from "../models/user.model.js";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore/lite";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider.jsx";

const AddStory = () => {
  let imgUrl;
  // const [imgUrl, setImgUrl] = useState("");
  let like = 0;
  const [image, setImage] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // window.location.href = "/homepage";
    const res = await fetch(
      "https://legacy-f3np-1mj086o7h-ish-sarins-projects.vercel.app/add_story",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
        body: JSON.stringify({
          // id: uniqid(),
          text: e.target.textarea.value,
          name: e.target.name.value,
          relation: e.target.relation.value,
          file: imgUrl,
          likes: like,
          // comments: [{}],        //incase only for comments
          comments: [
            //for comments + username

            {
              comment_on_post: "",
            },
          ],
          // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          timestamp: serverTimestamp(),
        }),
      }
    );
    console.log(res);
    const data = res.json();
    if (data.status === 500) console.log("Error");
  };

  const uploadFile = (e) => {
    console.log(image);
    e.preventDefault();
    if (image == null) return;
    try {
      // const imgRef = storage.child(`img/${image.name}`);
      const imgRef = ref(storage, `images/${image.name}`);
      // imgRef.put(image).then((snapshot) => {
      uploadBytes(imgRef, image).then((snapshot) => {
        return getDownloadURL(imgRef).then((url) => {
          //   // url is the download URL
          imgUrl = url;
          console.log(imgUrl);
        });
      });
      setTimeout(() => {
        alert("Image Uploaded");
      }, 2000);
    } catch (error) {
      // deal any errors
      console.log(error);
    }
    // console.log(image.name);
  };
  return (
    <div className="post-details">
      <h1>Post Details</h1>
      <form onSubmit={handleSubmit} action="/homepage" className="mb-2">
        <div class="mb-3 p-3 post-caption">
          <label className="form-label p-2" form-label>
            Caption
          </label>
          <textarea
            name="textarea"
            id=""
            cols="120"
            rows="2"
            placeholder="Tell you Story!!"
          ></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label p-2">Name</label>
          <input
            type="text"
            value={user}
            // placeholder="Enter your Name"
            // required
            disabled={true}
            name="name"
          />
        </div>
        <div class="mb-3 ">
          <label htmlFor="" form-label className="p-2">
            Relation
          </label>
          <input type="text" placeholder="Your Relation" name="relation" />
        </div>
        <div class="mb-5">
          <label htmlFor="" form-label className="p-2">
            Share this moment by uploading a picture!!{" "}
          </label>
          <input
            type="file"
            name="file"
            className="post-choosefile w-20"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
          <button className="btn post-uploadbtn " onClick={uploadFile}>
            Upload
          </button>
        </div>

        <button class="btn btn-primary post-btn" type="submit">
          Post
        </button>
      </form>

      <Link to="/homepage" style={{ textDecoration: "none", color: "white" }}>
        <button className="btn btn-danger p-2 mt-2 w-20 ">
          Back To Home Page
        </button>
      </Link>
    </div>
  );
};

export default AddStory;
