import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetailCard = () => {
    const data = useLoaderData();
    const {details,image_url,title}=data
  return (
    <div>
      <Card>
        <Card.Img variant='top' src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant='danger'>
            <Link to='/category/0' className="text-decoration-none text-white">Go Home</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetailCard;