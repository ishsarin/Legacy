import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpUser = () => {
    // createUserWithEmailAndPassword(auth, email, password).then((value) => {
    //   console.log(value);
    // });
  };

  return (
    <div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Enter the Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter the Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signUpUser}>Submit</button>
      </div>
    </div>
  );
};

export default SignUp;
