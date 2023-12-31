import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);
  const handleCheckbox = (event) => {
    console.log(event.target.checked);
    setAccept(event.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Successfully =>",user);
      })
      .catch((error)=>{
        console.log("error=> ",error.message);
      });
    
  };
  return (
    <>
      <h2 className='text-center'>Register Here!!</h2>

      <Form
        className='border border-3 w-50 mx-auto py-5 px-2'
        onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            name='name'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check
            type='checkbox'
            label={
              <>
                Accept<Link to='/terms'>Term & Condition</Link>
              </>
            }
            onChange={handleCheckbox}
          />
        </Form.Group>

        <Button variant='primary' type='submit' disabled={!accept}>
          Register
        </Button>
        <p>
          Already register? <Link to='/login'>Login now</Link>
        </p>
      </Form>
    </>
  );
};

export default Register;
