import React, { useState } from "react";
import { auth } from "../models/user.model";
import { createUserWithEmailAndPassword } from "firebase/auth";
import SignIn from "./SignIn";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import { UserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import HomePage from "../components/homePage";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const [signedup, setSignedUp] = useState(false);

  const [show, setShow] = useState(false);

  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        setSignedUp(!signedup);
        setUser(username);
      })
      .catch((error) => {
        console.log(error);
        setShow(!show);
      });
  };

  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(!show)} dismissible>
          <Alert.Heading>Invalid Email or Password!</Alert.Heading>
          <Alert.Heading>Please try Again 😄</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
      {signedup === false ? (
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
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUser(e.target.value);
                }}
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
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <button className="btn btn-danger p-2 mt-2 w-20 ">
              Back To Sign In Page
            </button>
          </Link>
        </div>
      ) : (
        <HomePage />
      )}
    </>
  );
};

export default SignUp;
