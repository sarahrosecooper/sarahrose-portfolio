import "../Navigation.css";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

const NavElements = styled.li`
  display: inline;
`;

const Navigation = () => {
  return (
    <div>
      <nav className="nav">
        <Container>
          <NavElements className="nav-li">
            <Link to="/contact" className="nav-link">
              contact
            </Link>
          </NavElements>
          <NavElements className="nav-li">
            <Link to="/skills" className="nav-link">
              skills
            </Link>
          </NavElements>

          <NavElements className="nav-li">
            <Link to="/projects" className="nav-link">
              projects
            </Link>
          </NavElements>

          <NavElements className="nav-li">
            <Link to="/about" className="nav-link">
              home
            </Link>
          </NavElements>
        </Container>
      </nav>
    </div>
  );
};

export default Navigation;
