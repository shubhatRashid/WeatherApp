import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css";
function Footer() {
  return (
    <Navbar className="footer" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          Developer : Shubhat Rashid
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
