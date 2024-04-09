import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../context/UserContextProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const { setUser } = useContext(UserContext);

  const signOut = () => {
    setUser("");
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
            href="/add_story"
          >
            Share your Story!!
          </a>
        </Navbar.Brand>
        <Navbar.Collapse className="navbar-signedin-header">
          <Navbar.Text className=" navbar-signedin-text">
            Signed in as:{" "}
            <span style={{ color: "#8affdc" }}>{!user ? "Guest" : user}</span>
          </Navbar.Text>
          {user === "" ? (
            <Navbar.Text className=" navbar-signedin-text">
              <Link to="/">Login</Link>
            </Navbar.Text>
          ) : (
            <Navbar.Text className=" navbar-signedin-text">
              <Link to="/homepage" onClick={signOut}>
                Signout
              </Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
