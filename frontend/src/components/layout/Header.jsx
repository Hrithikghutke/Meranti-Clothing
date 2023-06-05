import React from "react";
import "../../scss/_header.scss";
import { Link } from "react-router-dom";
//----------- Bootstrap Imports ----------------
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

//----------- Logo Import ----------------
import Logo from "../../assets/Logo/Logo.svg";
//----------- Icons Import ----------------

import { HiOutlineMenuAlt1 } from "react-icons/hi";

function Header() {
  var expand = "false";
  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid className="header">
        <div className="toggle-btn-container">
          <Navbar.Toggle
            className="toggle-btn"
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          >
            <HiOutlineMenuAlt1 />
          </Navbar.Toggle>
        </div>

        <Navbar.Brand className="logo-container">
          <img src={Logo} alt="img" />
        </Navbar.Brand>
        <Nav.Link className="nav-links-ul">
          <Link>Shop</Link>
          <Link>Search</Link>
          <Link>Login</Link>
        </Nav.Link>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="start"
          className="sidebar-container"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              className="sidebar-title"
              id={`offcanvasNavbarLabel-expand-${expand}`}
            >
              <h3>Meranti Clothing</h3>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="sidebar-ul justify-content-end flex-grow-1 pe-3">
              <Nav.Link>
                <Link>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link>All Products</Link>
              </Nav.Link>
              <Nav.Link>
                <Link>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link>Contact</Link>
              </Nav.Link>
            </Nav>
            <Form className="sidebar-search d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
