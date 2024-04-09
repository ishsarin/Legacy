import React, { useState } from "react";
import { auth } from "../models/user.model";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("signIn success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Sign In Page</h1>

      <div>
        <label htmlFor="">Email</label>
        <input
          type="email"
          required
          value={email}
          placeholder="Enter the Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          value={password}
          type="password"
          placeholder="Enter the Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signInUser}>Submit</button>
      </div>
      <h2>Don't have account, make one?</h2>
      <h2>Or you can view posts as Guest</h2>
      <Link to="/SignUp">
        <button>SignUp</button>
      </Link>
      <Link to="/homepage">
        <button>Guest Login</button>
      </Link>
    </div>
  );
};

export default SignIn;
