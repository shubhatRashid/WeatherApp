import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css";
function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="bottom footer">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start">
          <Navbar.Text>Developer: Shubhat Rashid</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
