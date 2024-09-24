import React from "react";
import { Container, Navbar } from "react-bootstrap";
import FoodBankIcon from "@mui/icons-material/FoodBank";

function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="display-inline-block">
          <FoodBankIcon className="iconHome" />
          <Navbar.Brand className="home" href="/">
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;