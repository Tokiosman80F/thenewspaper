import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../pages/Shared/Header/Header'
import RightContent from '../../pages/Shared/Contents/RightContent';
import LeftContent from '../../pages/Shared/Contents/LeftContent';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
      <Container>
        <Header></Header>
        
          <Row>
            <Col><LeftContent></LeftContent></Col>
            <Col lg={6}>{<Outlet></Outlet>}</Col>
            <Col><RightContent></RightContent></Col>
          </Row>
          
        </Container>
    
    );
}

export default MainLayout