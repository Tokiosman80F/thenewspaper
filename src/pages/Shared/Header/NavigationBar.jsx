import { Button, Container, Nav, Navbar } from "react-bootstrap";


const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mx-auto '>
            <Nav>Home </Nav>
            <Nav className='mx-3'>About</Nav>
            <Nav>Carrer</Nav>
          </Nav>
          <Nav>
            <Nav className="mx-auto">
              <Button className='bg-secondary border-0 mx-2'>Login</Button>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
