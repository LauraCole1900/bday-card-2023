import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import Confetti from 'react-confetti';
import VideoEmbed from './components/VideoEmbed';
// import Candle from './components/candle';
import './App.css';

export default function App() {
  return(
    <>
      <Container>
        <Row>
          <Col className="justify-centered">
            <h1>Happy birthday!</h1>
          </Col>
        </Row>
        <VideoEmbed />
      </Container>
      <Confetti />
    </>
  )
}
