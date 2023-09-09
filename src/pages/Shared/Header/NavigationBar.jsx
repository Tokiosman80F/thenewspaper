import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto '>
            <Link to='/category/0' className='text-decoration-none text-black'>
              Home
            </Link>
            <Nav className='mx-3'>About</Nav>
            <Nav>Carrer</Nav>
          </Nav>
          <Nav>
            <Nav className='mx-auto'>
              <Button className='bg-secondary border-0 mx-2 '>
                <Link to='/login' className="text-white text-decoration-none">Login</Link>
              </Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
