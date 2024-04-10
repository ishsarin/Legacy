import React, { useState } from "react";
import { auth } from "../models/user.model";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("signIn success");
        console.log(value);
        console.log(username);
        setUser(username);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container signin">
      <h1>Sign In Page</h1>

      <div className="signin-header">
        <div className=" signin-wrapper mb-2">
          <label className="form-label p-1 signin-wrapper-email" htmlFor="">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter the Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" signin-wrapper mb-2">
          <label className="form-label p-1" htmlFor="">
            Username
          </label>
          <input
            type="text"
            required
            value={username}
            placeholder="Enter the Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className=" signin-wrapper mb-2">
          <label className="form-label p-1" htmlFor="">
            Password
          </label>
          <input
            value={password}
            type="password"
            placeholder="Enter the Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn signin-btn " onClick={(e) => signInUser(e)}>
          Submit
        </button>
      </div>
      <div className="signin-signupbtn">
        <h6>Don't have account, make one?</h6>
        <Link to="/SignUp">
          <button className="btn signup">SignUp</button>
        </Link>
      </div>
      <div className="signin-guestbtn">
        <h6>
          Or continue as
          <Link to="/homepage" style={{ marginLeft: "8px" }}>
            {/* <button className="btn guest-login">Guest Login</button> */}
            Guest
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default SignIn;
