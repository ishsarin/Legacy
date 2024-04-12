import React, { useState } from "react";
import { auth } from "../models/user.model";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);

  const [login, setLogin] = useState(false);

  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("signIn success");
        // console.log(value);
        setUser(username);
        setLogin(!login);
        console.log(user);
        let path = "/homepage";
        navigate(path);
      })
      .catch((error) => {
        console.log(error);
        setShow(!show);
      });
  };

  const guestLogin = (e) => {
    e.preventDefault();

    setUser("Guest");
    setLogin(!login);
    let path = "/homepage";
    navigate(path);
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

      {/* {login === false ? ( */}
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
          <button
            className="btn signin-btn "
            onClick={(e) => signInUser(e)}
            disabled={show === true ? true : false}
          >
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
            <span className="guest-login" onClick={(e) => guestLogin(e)}>
              Guest Login
            </span>
          </h6>
        </div>
      </div>
      {/* ) : (
        <HomePage />
      )} */}
    </>
  );
};

export default SignIn;
