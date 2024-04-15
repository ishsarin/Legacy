import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loggedout, setLoggedOut] = useState(true);

  const signOutBtn = () => {
    setLoggedOut(!loggedout);
    setUser("Guest");
  };

  const addStory = () => {
    // window.location.href = "/add_story";
    let path = "/add_story";
    navigate(path);
  };

  const loginRedirect = () => {
    let path = "/";
    navigate(path);
  };

  return (
    <>
      <Navbar className="bg-body-tertiary navbar-header">
        <Container className="navbar-container">
          <Navbar.Brand href="#home" className="navbar-brand">
            Legacy
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Brand className="navbar-share-story">
            {/* <Link to="/add_story"> */}
            <button
              className="btn btn-warning p-3 m-2 w-100 share-story"
              onClick={addStory}
              // disabled={user === "Guest" || loggedout ? true : false}
            >
              Share your Story!!
            </button>
            {/* </Link> */}
          </Navbar.Brand>
          <Navbar.Collapse className="navbar-signedin-header">
            <Navbar.Text className=" navbar-signedin-text">
              Signed in as:{" "}
              <span style={{ color: "#8affdc" }}>
                {!loggedout ? "Guest" : user}
              </span>
            </Navbar.Text>
            {loggedout === true && user.substring(0, 5) !== "Guest" ? (
              <Navbar.Text className=" navbar-signedin-text">
                <button className="btn btn-signout" onClick={signOutBtn}>
                  Signout
                </button>
              </Navbar.Text>
            ) : (
              <Navbar.Text
                className=" navbar-signedin-text"
                onClick={() => setLoggedOut(!loggedout)}
              >
                <button className="btn btn-signout" onClick={loginRedirect}>
                  Login
                </button>
                {/* <a href="/">Login</a> */}
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
