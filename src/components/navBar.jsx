import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
const NavBar = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const [loggedout, setLoggedOut] = useState(true);

  const auth = getAuth();

  const signOutBtn = () => {
    setLoggedOut(!loggedout);
    signOut(auth)
      .then((value) => {
        console.log("User Signed Out!", value);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Navbar className="bg-body-tertiary navbar-header">
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-brand">
          Legacy
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Brand className="navbar-share-story">
          <a
            className="btn btn-warning p-3 m-2 w-100 share-story"
            // href="/add_story"
            // onClick={checkLogin}
          >
            Share your Story!!
          </a>
        </Navbar.Brand>
        <Navbar.Collapse className="navbar-signedin-header">
          <Navbar.Text className=" navbar-signedin-text">
            Signed in as: <span style={{ color: "#8affdc" }}>{user}</span>
          </Navbar.Text>
          {loggedout === true ? (
            <Navbar.Text className=" navbar-signedin-text">
              <Link to="/homepage" onClick={signOutBtn}>
                Signout
              </Link>
            </Navbar.Text>
          ) : (
            <Navbar.Text className=" navbar-signedin-text">
              <Link to="/">Login</Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
