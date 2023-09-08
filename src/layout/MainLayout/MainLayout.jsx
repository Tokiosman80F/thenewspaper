import { Col, Container, Row } from 'react-bootstrap'
import Header from '../../pages/Shared/Header/Header'
import RightContent from '../../pages/Shared/Contents/RightContent';
import LeftContent from '../../pages/Shared/Contents/LeftContent';

const MainLayout = () => {
    return (
      <Container>
        <Header></Header>
        
          <Row>
            <Col><LeftContent></LeftContent></Col>
            <Col lg={6}>2 of 2</Col>
            <Col><RightContent></RightContent></Col>
          </Row>
          
        </Container>
    
    );
}

export default MainLayout