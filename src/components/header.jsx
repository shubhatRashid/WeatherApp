import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../styles.css"
function Header() {
  return (
    <Navbar className="header" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <i class="fa-solid fa-sun-cloud"></i>
          <strong>The Weather App</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
