import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'; // ✅ 修正

const Home = () => {
  return (
    <div>
      <div className='container app-container' role='parent'>
        {' '}
        {/* ✅ 修正 */}
        <Row>
          <Col>
            <h1>Reactでテストチュートリアル</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Login data-testid='child' />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
