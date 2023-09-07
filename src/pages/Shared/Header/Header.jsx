import moment from "moment/moment";
import Marquee from "react-fast-marquee";
import NavigationBar from "./NavigationBar";
const Header = () => {
    return (
      <div className='text-center mt-5'>
        <h1 className='text-uppercase mb-3'>
          The-
          <span className='text-danger border border-2 border-secondary px-2'>
            NewsPaper
          </span>
        </h1>
        <p className='text-secondary'>Journalism Without Fear or Favour</p>
        <h5>{moment().format("dddd,MMMM Do,YYYY")}</h5>
        <div className="d-flex mt-4">
          <span className='bg-danger text-white border-0 px-4 py-2 rounded'>
            Latest
          </span>
          <Marquee speed={80}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...  
          </Marquee>
        </div>
        <NavigationBar></NavigationBar>
      </div>
    );
}

export default Header