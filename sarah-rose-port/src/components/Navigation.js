import "../Navigation.css";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav``;

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-right: 20px;
`;

const NavElements = styled.li`
  display: inline;
  color: #a9a9a9;
`;

const Navigation = () => {
  return (
    <div>
      <Nav>
        <Container>
          <NavElements>
            <Link to="/">about</Link>
          </NavElements>
          <NavElements>
            <Link to="/projects">projects</Link>
          </NavElements>
          <NavElements>
            <Link to="/contact">contact</Link>
          </NavElements>
        </Container>
      </Nav>
    </div>
  );
};

export default Navigation;
