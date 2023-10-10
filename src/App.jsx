import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Confetti from 'react-confetti';
import VideoEmbed from './components/VideoEmbed';
import Cake from './components/Cake';
import './App.css';

export default function App() {
  return (
    <>
      <Container>
        <Cake />
        <VideoEmbed />
      </Container>
      <Confetti />
    </>
  );
}
