import moment from "moment";
import { Card } from "react-bootstrap";
import { FaBookmark, FaEye, FaRegStar, FaShareNodes, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const CategoryNewsCard = ({data}) => {
    const { _id,details, image_url, title, total_view, rating, author } = data;
    return (
      <>
        <Card className=' mb-3'>
          <Card.Header className='d-flex'>
            {/* author image */}
            <img src={author.img} width={50} className='rounded-circle' />
            <div className='flex-grow-1'>
              {/* author name */}
              <h5>{author.name}</h5>
              {/* date */}
              {moment(author.published_date).format("DD-MM-YYYY")}
            </div>
            <div>
              {/* icon */}
              <FaBookmark></FaBookmark>
              <FaShareNodes></FaShareNodes>
            </div>
          </Card.Header>
          <img src={image_url} alt='' />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250)}....
                <Link to={`/news/${_id}`}>
                  ReadMore
                </Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Body>
          <Card.Footer className='text-secondary d-flex justify-content-between'>
            <div>
              <Rating
                placeholderRating={rating.number}
                readonly={true}
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={
                  <FaStar style={{ color: "orange" }}></FaStar>
                  //   <img src='assets/images/star-red.png' className='icon' />
                }
                fullSymbol={
                  <FaStar></FaStar>
                  // <img src='assets/images/star-yellow.png' className='icon' />
                }
              />
              <span className='mx-2 fw-bold'>{rating.number}</span>
            </div>
            <div>
              <FaEye className='mx-2'></FaEye>
              {total_view}
            </div>
          </Card.Footer>
        </Card>
      </>
    );
}

export default CategoryNewsCard