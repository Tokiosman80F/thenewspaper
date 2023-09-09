import { Col, Container, Row } from "react-bootstrap";
import Header from "../../pages/Shared/Header/Header";
import RightContent from "../../pages/Shared/Contents/RightContent";
import { Outlet } from "react-router-dom";


const NewsLayout = () => {
    return (
      <Container>
        <Header></Header>

        <Row>
          <Col lg={9}><Outlet></Outlet></Col>
          <Col lg={3}>
            <RightContent></RightContent>
          </Col>
        </Row>
      </Container>
    );
}

export default NewsLayout