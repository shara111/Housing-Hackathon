import { Container } from "react-bootstrap";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <MainNavbar />
      <br />
      <Container>{props.children}</Container>
      <br />
      <Footer />
    </>
  );
}
