import React from "react";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="info container">
      <h4>
        Welcome to Legacy, a platform dedicated to preserving and sharing
        cherished memories of loved ones!
      </h4>
      <h4>
        It's not your typical social media site; here, we honor and celebrate
        the beautiful moments spent with those who have left a lasting impact on
        our lives.
      </h4>
      <h4>Hope you like it!😄</h4>
      <div className="signin-signupbtn">
        <Link to="/SignIn">
          <button className="btn signup">SignIn</button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
