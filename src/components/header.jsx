import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <i class="fa-solid fa-sun-cloud"></i>
          The Weather App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
