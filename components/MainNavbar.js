import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainNavbar() {
  const [searchField, setSearchField] = useState();
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchField);
    router.push(`/artwork?title=true&q=${searchField}`);
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#183D3D", padding: "10px" }}>
        <Container fluid className="container">
          <Navbar.Brand href="#">StudentCritic</Navbar.Brand>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="bsasic-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About Us</Nav.Link>
              </Link>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <Link href="/support" passHref legacyBehavior>
                <Nav.Link>Support Us</Nav.Link>
              </Link>
            </Nav>

            <Button href="/submit" variant="outline-success">
              Submit
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
