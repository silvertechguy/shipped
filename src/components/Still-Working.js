import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const StillWorking = () => {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand className="m-auto">
            still working on this project
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://github.com/silvertechguy">GitHub</Nav.Link>
            <Nav.Link href="mailto:silvertechguy@gmail.com">
              Contact ME
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default StillWorking;
