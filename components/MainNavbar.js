import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#183D3D", padding: "10px" }}>
        <Container fluid className="container">
          <Navbar.Brand href="#" eventKey="disabled" disabled>
            StudentStays
          </Navbar.Brand>
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
              <Link href="/history" passHref legacyBehavior>
                <Nav.Link>Search History</Nav.Link>
              </Link>
            </Nav>
            <Button href="/profile" variant="outline-success">
              Edit Profile
            </Button>
            &nbsp; &nbsp;
            <Button href="/preferences" variant="outline-success">
              Edit Preferences
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
