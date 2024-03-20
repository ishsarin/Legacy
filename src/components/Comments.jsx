import React, { useState } from "react";
import { useAccordionButton } from "react-bootstrap";
import { IoIosSend } from "react-icons/io";

const Comments = () => {
  const [comments, setComments] = useState([
    {
      username: "",
      comment: "",
    },
  ]);

  const sendComment = (e) => {
    const comment = document.querySelector(".comments-input");

    console.log(comment.value);
    const new_comment = {
      username: "ish",
      comment: comment.value,
    };
    setComments([...comments, new_comment]);
    comment.value = "";
  };

  return (
    <>
      <div className="comments">
        <input
          type="text"
          placeholder="Enter your Comment..."
          className="comments-input"
          // onChange={(e) => sendComment(e)}
        />
        <div className="comments-send" onClick={sendComment}>
          <IoIosSend size={20} color="#01d293" />
        </div>
      </div>

      {comments.map((comment, index) => (
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
      ))}
    </>
  );
};

export default Comments;
