import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaComment } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";
import Comments from "../components/Comments";

const Post = ({ info }) => {
  const [hover, setHover] = useState(false);

  const [commentsClick, setCommentsClick] = useState(false);

  return (
    <div className="homepage_comments d-flex justify-content-center">
      {info.map((data, index) => (
        <Card
          className="w-25 post"
          key={index}
          onMouseLeave={() => {
            setHover(false);
            // setCommentsClick(false);
          }}
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
              {hover && (
                <ListGroup.Item className="post-reactions-all">
                  {" "}
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
                </ListGroup.Item>
              )}
              <ListGroup.Item className="post-interations-wrapper">
                {" "}
                <Card.Subtitle
                  className="post-react"
                  onMouseOver={() => setHover(true)}
                >
                  <div>
                    <FaRegThumbsUp />
                  </div>
                  <div>React</div>
                </Card.Subtitle>
                <Card.Subtitle
                  className="post-comment"
                  onClick={() => {
                    setCommentsClick(!commentsClick);
                    setHover(false);
                  }}
                >
                  <div>
                    <FaComment />
                  </div>
                  <div>Comment</div>
                </Card.Subtitle>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          {commentsClick && (
            <Card.Body>
              <Card.Subtitle className="comments-wrapper">
                <Comments />
              </Card.Subtitle>
            </Card.Body>
          )}
        </Card>
      ))}
    </div>
  );
};

export default Post;
