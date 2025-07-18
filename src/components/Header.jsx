import {  Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand onClick={()=> navigate('/')}>Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=> navigate(-1)}>뒤로가기</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="/test">TEST</Nav.Link>
          </Nav>
          <Link to="/test">테스트2</Link>
      </Container>
    </Navbar>
  )
}

export default Header