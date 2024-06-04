import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar expand="sm" bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/happycake/Home"
              className="text-decoration-none text-white p-2 fs-2 fw-bold"
            >
              <i class="fa-solid fa-cake-candles"></i> Happy Cake
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link
            to="/happycake/Home"
            className="text-decoration-none text-white p-2"
          >
            Home
          </Link>
          <Link
            to="/happycake/Contact"
            className="text-decoration-none text-white p-2"
          >
            Contacto
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
