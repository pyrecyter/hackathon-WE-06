import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Bon Voyage</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">What to do</Nav.Link>
      <Nav.Link href="#pricing">Wherer to go</Nav.Link>
      <NavDropdown title="Interessting Information" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link to={"/box"}>About Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="1.jpg">Log In</Nav.Link>
      <Nav.Link eventKey={2} href="login.js">
        Sing Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default App;
