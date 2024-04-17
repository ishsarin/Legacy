import React from "react";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="info container">
      <h4>
        This website is a place for you to share or view the memories shared by
        other individuals of people whose Legacy is begin carried on and we
        cherish the beautiful and the most amazing time spent with them!
      </h4>
      <h4>
        This is not a social media website, but a place for people to share the
        memories with their near and dear ones!{" "}
      </h4>
      <h4>Hope you all like it! 😄</h4>
      <div className="signin-signupbtn">
        <Link to="/SignIn">
          <button className="btn signup">SignIn</button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
