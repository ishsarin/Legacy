import React, { useEffect, useState } from "react";
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

const Post = ({ info }) => {
  // const [hover, setHover] = useState(false);

  // const admin = require("firebase-admin");
  // const FieldValue = admin.firestore.FieldValue;

  const [commentsClick, setCommentsClick] = useState(false);

  const [like, setLike] = useState(0);

  const commentsFunction = async (data) => {};

  const likesFunction = async (data) => {
    await User.doc(data.id).update({
      likes: data.likes + 1,
    });
  };

  const [comments, setComments] = useState([
    {
      username: "",
      comment: "",
    },
  ]);

  const sendComment = async (data) => {
    const comment = document.querySelector(".comments-input");
    await User.doc(data.id).update({
      comments: firebase.firestore.FieldValue.arrayUnion(comment.value),
    });
    // console.log(data.id);
  };

  return (
    <div className="homepage_comments d-flex justify-content-center">
      {info.map((data) => (
        <Card
          className="w-25 post"
          key={data.id}
          // onMouseLeave={() => {
          //   setHover(false);
          //   // setCommentsClick(false);
          // }}
        >
          <Card.Img variant="top" src={data.file} />
          <Card.Body className="post-wrapper">
            <Card.Text className="post-text">
              <span className="post-username">{data.name}</span>
              <span className="post-caption">{data.text}</span>
            </Card.Text>
          </Card.Body>

          <Card.Body className="post-interactions">
            <ListGroup className="list-group-flush">
              {/* {hover && ( */}

              {/* <ListGroup.Item className="post-reactions-all">
                <div className="post-react-reactions-wrapper">
                  <ul className="post-react-reactions">
                    <li>
                      <AiFillLike color="blue" size={30} />
                    </li>
                    <li>
                      <FaHeart color="red" size={30} />
                    </li>
                    <li>
                      <FaFire color="orange" size={30} />
                    </li>
                  </ul>
                </div>
              </ListGroup.Item> */}

              <ListGroup.Item className="post-interations-wrapper">
                {" "}
                <Card.Subtitle
                  className="post-react"
                  // onMouseOver={() => setHover(true)}
                >
                  <div className="post-like">{data.likes}</div>

                  <div
                    className="post-likes"
                    onClick={() => {
                      likesFunction(data);
                    }}
                  >
                    <div>
                      <FaRegThumbsUp />
                    </div>
                    <div>Like</div>
                  </div>
                </Card.Subtitle>
                <Card.Subtitle
                  className="post-comment"
                  // onClick={() => {
                  //   commentsFunction(data);
                  //   setCommentsClick(!commentsClick);
                  //   //   // setHover(false);
                  // }}
                >
                  <div>
                    <FaComment />
                  </div>
                  <div>Comment</div>
                </Card.Subtitle>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          {/* {commentsClick && ( */}
          <Card.Body>
            <Card.Subtitle className="comments-wrapper">
              {/* <Comments data={data} /> */}
              <div className="comments">
                <input
                  type="text"
                  placeholder="Enter your Comment..."
                  className="comments-input"
                  // onChange={(e) => sendComment(e)}
                />

                <div
                  className="comments-send"
                  onClick={() => sendComment(data)}
                >
                  <IoIosSend size={20} color="#01d293" />
                </div>
              </div>

              {/* {comments.map((comment, index) => (
                  <div id={index} className="comments-on_post">
                    <div className="comments-each_comment">
                      <div className="comments-each_comment-username">
                        {comment.username}
                      </div>
                      <div className="comments-each_comment-comment">
                        {comment.comment}
                      </div>
                    </div>
                  </div>
                ))} */}
            </Card.Subtitle>
          </Card.Body>
          {/* )} */}
        </Card>
      ))}
    </div>
  );
};

export default Post;
