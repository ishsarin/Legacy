import React, { useState } from "react";
import { auth } from "../models/user.model";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from "./SignIn";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { UserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log("username:", username);
      value.displayName = username;
      setUser(username);
    });
    // updateProfile(auth.currentUser, {
    //   displayName: username,
    // })
    //   .then((val) => {
    //     console.log(val);
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="container signin">
      <h1>SignUp Page</h1>
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
        <button className="btn w-20 signup-btn" onClick={signUpUser}>
          Submit
        </button>
      </div>
      {/* <div className="signup-header">
        <div className="signin-wrapper mb-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter the Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="signin-wrapper mb-2">
          <label htmlFor="">Username</label>
          <input
            type="text"
            required
            value={username}
            placeholder="Enter the Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="signin-wrapper mb-2">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            placeholder="Enter the Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/homepage">
          <button onClick={signUpUser}>Submit</button>
        </Link>
      </div> */}
    </div>
  );
};

export default SignUp;
