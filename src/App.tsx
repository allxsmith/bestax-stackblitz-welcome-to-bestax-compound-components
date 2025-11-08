import { Button, Card, Hero } from '@allxsmith/bestax-bulma';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <Hero color="primary">
      <Hero.Body>
        <Card>
          <Card.Header>
            <Card.Header.Title>Welcome to bestax-bulma!</Card.Header.Title>
          </Card.Header>
          <Card.Content>
            <p>Modern React components for Bulma CSS v1</p>
            <Button color="success">Get Started</Button>
          </Card.Content>
        </Card>
      </Hero.Body>
    </Hero>
  );
}


export default App
