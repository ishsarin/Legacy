import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary navbar-header">
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="navbar-brand">
          Legacy
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Brand className="navbar-share-story">
          <a className="btn btn-warning p-3 m-2 w-100" href="/add_story">
            Share your Story!!
          </a>
        </Navbar.Brand>
        <Navbar.Collapse className="navbar-signedin-header">
          <Navbar.Text className=" navbar-signedin-text">
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
