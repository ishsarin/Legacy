import React, { useState } from "react";
import { storage } from "../models/user.model.js";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore/lite";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider.jsx";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "../models/user.model.js";
const AddStory = () => {
  let imgUrl;
  // const [imgUrl, setImgUrl] = useState("");
  let like = 0;
  const [image, setImage] = useState(null);

  const [text, setText] = useState("");
  const [relation, setRelation] = useState("");
  const [postbtn, setPostBtn] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let path = "/homepage";
    navigate(path);
    // window.location.href = "/homepage";
    // const res = await fetch("https://legacy-nxxp.onrender.com/", {
    //   mode: "no-cors",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     source: "/manifest.webmanifest",

    //     key: "Access-Control-Allow-Origin",
    //     value: "*",
    //   },
    //   body: JSON.stringify({
    //     // id: uniqid(),
    //     text: e.target.textarea.value,
    //     name: e.target.name.value,
    //     relation: e.target.relation.value,
    //     file: imgUrl,
    //     likes: like,
    //     // comments: [{}],        //incase only for comments
    //     comments: [
    //       //for comments + username

    //       {
    //         comment_on_post: "",
    //       },
    //     ],
    //     // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     timestamp: serverTimestamp(),
    //   }),
    // });
    // console.log(res);
    // const data = res.json();
    // if (data.status === 500) console.log("Error");

    const res = {
      text: text,
      name: e.target.name.value,
      relation: relation,
      file: imageURL,
      likes: like,
      comments: [
        {
          comment__on_post: "",
        },
      ],
      timestamp: serverTimestamp(),
    };
    const dataRes = JSON.stringify(res);
    const data = JSON.parse(dataRes);

    const docData = await addDoc(collection(db, "Users"), data);

    // console.log(docData);
  };

  const uploadFile = (e) => {
    console.log(image);
    e.preventDefault();
    if (image == null) return;

    alert("Please wait for the message that your Image is Uploaded!");
    try {
      // const imgRef = storage.child(`img/${image.name}`);
      const imgRef = ref(storage, `images/${image.name}`);
      // imgRef.put(image).then((snapshot) => {
      uploadBytes(imgRef, image).then((snapshot) => {
        return getDownloadURL(imgRef).then((url) => {
          //   // url is the download URL
          // imgUrl = url;
          setImageURL(url);
          console.log(imageURL);
          alert("Image Uploaded!😄");
          setPostBtn(!postbtn);
        });
      });
    } catch (error) {
      // deal any errors
      console.log(error);
    }
    // console.log(image.name);
  };
  return (
    <div className="post-details">
      <h1>Post Details</h1>
      <form onSubmit={handleSubmit} className="mb-5 post-form">
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
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <div class="mb-3 post-name">
          <label class="form-label p-2 ">Name</label>
          <input
            type="text"
            value={user}
            // placeholder="Enter your Name"
            // required
            disabled={true}
            name="name"
          />
        </div>
        <div class="mb-3 post-relation">
          <label htmlFor="" form-label className="p-2">
            Relation
          </label>
          <input
            type="text"
            placeholder="Your Relation"
            name="relation"
            onChange={(e) => {
              setRelation(e.target.value);
            }}
          />
        </div>
        <div class="mb-5">
          <label htmlFor="" form-label className="p-2 post-upload">
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

        <button
          class="btn btn-primary post-btn"
          type="submit"
          disabled={postbtn === false ? true : false}
        >
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
