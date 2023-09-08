import { Button, ListGroup } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import  qImage1 from '../../../assets/images/qZone1.png'
import qImage2 from "../../../assets/images/qZone2.png";
import qImage3 from "../../../assets/images/qZone3.png";
const RightContent = () => {
    return (
      <>
        <div>
          <h3>Login With</h3>
          <div className='d-flex flex-column gap-2'>
            <Button variant='outline-primary'>
              <FcGoogle></FcGoogle> Login in with Google
            </Button>
            <Button variant='outline-secondary'>
              <FaGithub></FaGithub>Login in with GitHub
            </Button>
          </div>
        </div>

        <div>
          <h3>Find Us On</h3>
          <ListGroup>
            <ListGroup.Item>
              <FaFacebook></FaFacebook> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaSquareTwitter></FaSquareTwitter>Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram></FaInstagram>Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div>
          <h3>Q-zone</h3>
          <div className='d-flex flex-column'>
            <img src={qImage1} alt='' />
            <img src={qImage2} alt='' />
            <img src={qImage3} alt='' />
          </div>
        </div>
      </>
    );
}

export default RightContent