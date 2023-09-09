
import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleLoginUser=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        loginUser(email,password)
        .then((userCredential)=>{
            const user=userCredential.user;
             console.log("successful login =>",user);
             navigate('/category/0')   
        })
        .catch((error)=>{console.log(error);})

    }
    return (
      <>
        <h2 className='text-center'>Please Login</h2>
        <Form className='border border-3 w-50 mx-auto py-5 px-2' onSubmit={handleLoginUser}>
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

          <Button variant='primary' type='submit'>
            Login
          </Button>
          <p>
            New here? <Link to='/register'>Register now</Link>
          </p>
        </Form>
      </>
    );
}

export default Login