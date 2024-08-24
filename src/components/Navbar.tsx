import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function Header() {
  const isLoggedIn = () => {
    return localStorage.getItem("accessToken");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Module-4</Navbar.Brand>
        <Navbar.Toggle />
        <Nav className="justify-content-end ">
          <Navbar.Collapse className="me-auto">
            <Nav.Link>
              <Link to={isLoggedIn() ? "#" : "/login"} onClick={isLoggedIn() ? handleLogout : () => {}}>
                {isLoggedIn() ? "Logout" : "Login"}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/register"> Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/categories"> Category</Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
