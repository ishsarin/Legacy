import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaComment } from "react-icons/fa";
import { db } from "../models/user.model.js";
import { IoIosSend } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import { doc, updateDoc } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";
import { UserContext } from "../context/UserContextProvider.jsx";

const Post = ({ info }) => {
  const likesFunction = async (data) => {
    const ref = doc(db, "Users", data.id);
    await updateDoc(ref, {
      likes: data.likes + 1,
    });
    // await User.doc(data.id).update({
    //   likes: data.likes + 1,
    // });
  };

  const { user } = useContext(UserContext);

  const [comments, setComments] = useState("");

  const typeComment = (e) => {
    // console.log(e.target.value);

    setComments(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments("");
  };

  const sendComment = async (data) => {
    console.log(comments);
    console.log(data.comments);

    // await User.doc(data.id).update({
    //   comments: firebase.firestore.FieldValue.arrayUnion({
    //     username_commenting_on_post: "ish sarin",
    //     comment_on_post: comments,
    //   }),
    // });
    if (comments.length > 0) {
      const ref = doc(db, "Users", data.id);
      const commentData = {
        username_commenting_on_post: user,
        comment_on_post: comments,
      };

      await updateDoc(ref, {
        comments: arrayUnion(commentData),
      });
    }

    const val = document.querySelector(".comments-input");
    val.value = "";
    setComments("");
  };

  return (
    <div className="homepage_comments d-flex justify-content-center">
      {info.map((data, index) => (
        <Card className="w-25 post" key={index}>
          <Card.Img variant="top" src={data.file} />
          <Card.Body className="post-wrapper">
            <Card.Text className="post-text">
              <span className="post-username">{data.name}</span>
              <span className="post-caption">{data.text}</span>
            </Card.Text>
          </Card.Body>

          <Card.Body className="post-interactions">
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="post-interations-wrapper">
                {" "}
                <Card.Subtitle className="post-like">
                  <div className="post-like-count">{data.likes}</div>

                  <div
                    className="post-like-btn"
                    onClick={() => {
                      likesFunction(data);
                    }}
                  >
                    <div>
                      <FaHeart size={20} color="red" />
                    </div>
                    {/* <div>Like</div> */}
                  </div>
                </Card.Subtitle>
                <Card.Subtitle className="post-comment">
                  <div className="post-comment-count">
                    {data.comments.length - 1}
                  </div>
                  <div className="post-comment-btn">
                    <FaComment size={20} color="#94e11d" />
                  </div>
                  {/* <div>Comment</div> */}
                </Card.Subtitle>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Body>
            <Card.Subtitle className="comments-wrapper">
              <form
                className="comments"
                key={index}
                onSubmit={(e) => handleSubmit(e)}
              >
                <input
                  type="text"
                  placeholder="Enter your Comment..."
                  className="comments-input"
                  onChange={(e) => {
                    typeComment(e);
                  }}
                />

                <div
                  className="comments-send"
                  onClick={() => sendComment(data)}
                >
                  <button className="btn comments-send-btn" type="submit">
                    <IoIosSend size={20} color="#8affdc" />
                  </button>
                </div>
              </form>

              {/* {data.map((comment, index) => (
                <div id={index} className="comments-on_post">
                  <div className="comments-each_comment">
                    <div className="comments-each_comment-comment">
                      {comment.username_commenting_on_post}
                    </div>
                    <div className="comments-each_comment-comment">
                      {comment.comment_on_post}
                    </div>
                  </div>
                </div>
              ))} */}
              {data.comments.map((comment, index) => (
                <div id={index} className="comments-on_post">
                  <div className="comments-each_comment">
                    <div className="comments-each_comment-username">
                      {comment.username_commenting_on_post}
                    </div>
                    <div className="comments-each_comment-comment">
                      {comment.comment_on_post}
                    </div>
                  </div>
                </div>
              ))}
            </Card.Subtitle>
          </Card.Body>
          {/* )} */}
        </Card>
      ))}
    </div>
  );
};

export default Post;
