import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Post = ({ info }) => {
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
        <Card className="w-25 post" key={index}>
          <Card.Img variant="top" src={data.file} />
          <Card.Body>
            <Card.Text className="post-text">
              <span className="post-username">{data.name}</span>
              <span className="post-caption">{data.text}</span>
            </Card.Text>
          </Card.Body>

          <Card.Body>
            <Card.Subtitle>React</Card.Subtitle>
            <Card.Subtitle>Comment</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
      {/* )}
          ))} */}
    </div>
  );
};

export default Post;
