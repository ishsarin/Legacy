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
      console.log(value);
      setUser(username);
    });

    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then((val) => {
        console.log("username");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>SignUp Page</h1>
      <div>
        <label htmlFor="">Username</label>
        <input
          type="text"
          required
          value={username}
          placeholder="Enter the Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          value={email}
          placeholder="Enter the Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          placeholder="Enter the Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/homepage">
          <button onClick={signUpUser}>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
