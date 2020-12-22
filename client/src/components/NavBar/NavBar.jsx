import React,  { Component } from 'react';
import "./index.css"
import {  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBLink } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class FixedNavbarExample extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {

    return(
      <div>
        <Router>
          <header>
            <MDBNavbar className="navBg" dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>Google Books</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBLink to="/" link>Search</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <MDBLink to="/saved" link>Saved</MDBLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;