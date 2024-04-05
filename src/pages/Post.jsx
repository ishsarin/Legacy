import React, { useEffect, useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaComment } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import Comments from "../components/Comments";
import { User, db, firebase } from "../models/user.model.js";
import { IoIosSend } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";

const Post = ({ info }) => {
  const likesFunction = async (data) => {
    await User.doc(data.id).update({
      likes: data.likes + 1,
    });
  };

  const [comments, setComments] = useState("");

  const typeComment = (e) => {
    // console.log(e.target.value);
    setComments(e.target.value);
  };

  const sendComment = async (data) => {
    // const comment = document.querySelector(".comments-input");

    // const val = typeComment(data);

    console.log(comments);
    console.log(data);

    await User.doc(data.id).update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        username_commenting_on_post: "ish sarin",
        comment_on_post: comments,
      }),
    });
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
                      <FaThumbsUp size={20} color="blue" />
                    </div>
                    {/* <div>Like</div> */}
                  </div>
                </Card.Subtitle>
                <Card.Subtitle className="post-comment">
                  <div className="post-comment-count">
                    {/* {data.comments.length - 1} */}
                    {data.comments.length}
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
              <div className="comments" key={index}>
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
                  <IoIosSend size={20} color="#8affdc" />
                </div>
              </div>

              {data.comments.map((comment, index) => (
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
