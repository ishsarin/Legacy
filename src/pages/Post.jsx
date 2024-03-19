import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaComment } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaFire } from "react-icons/fa6";

const Post = ({ info }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="homepage_comments d-flex justify-content-center">
      {/* {info.map((data) => (
        {/* <div className="p-3 homepage_comments" key={data.id}>
          <div>{data.text}</div>
          {data.file === "" ? (
            ""
          ) : (
            <img src={data.file} thumbnail fluid className="p-3" width={400} />
          <h6>{data.name}</h6>
        </div> */}

      {info.map((data, index) => (
        <Card
          className="w-25 post"
          key={index}
          onMouseLeave={() => setHover(false)}
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
                <Card.Subtitle className="post-comment">
                  <div>
                    <FaComment />
                  </div>
                  <div>Comment</div>
                </Card.Subtitle>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Post;
