import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    logoutUser()
      .then(() => console.log("signout successfully"))
      .catch((error) => {
        console.log("Unsuccessful signout",error.message);
      });
  };
  console.log("The user", user);
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
              {user ? <p>{user.email}</p> :<p>No User</p>}
                  <Button className='bg-secondary border-0 mx-2 '>
                    <Link
                      className='text-white text-decoration-none'
                      onClick={handleSignOut}
                      to='/login'
                      >
                      {user?`LogOut`:`LogIn`}
                    </Link>
                  </Button>
    

            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
