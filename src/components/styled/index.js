import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import token from "../DesignToken";
import logo from "../../images/logo.svg";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  height: 100%;
  display: block;
  padding: 0rem 0.8rem;
  position: relative;
  overflow: hidden;
`;

const StyledNavbar = styled.nav`
  width: 100;
  height: 80px;
  padding: 0.8rem;
  max-width: 1200px;
  img {
    display: inline-block;
  }
`;

export const Navbar = () => (
  <StyledNavbar>
    <Link to="/">
      <img src={logo} />
    </Link>
  </StyledNavbar>
);

export const CTA = () => (
  <Container>
    <small>Commercial Leases</small>
    <h1>Put Your Rent on Pause</h1>
    <p>Take a Rent Holiday so you can focus on growth</p>
    <a href="https://forms.gle/7EzbNBstsRmFrges6">
      <StyledButton>See your options</StyledButton>
    </a>
    <ul>
      <li>Not Debt</li>
      <li>Personalised Terms</li>
      <li>1-12month Holidays</li>
    </ul>
  </Container>
);

const StyledButton = styled.button`
  font-size: 16px;
  background: ${token.colours.accent};
  padding: 0.8rem 0.8rem;
  border: none;
  border-radius: 0.4rem;
  color: white;
  font-weight: 800;
`;

const Container = styled.div`
  padding: 0.8rem;
`;
