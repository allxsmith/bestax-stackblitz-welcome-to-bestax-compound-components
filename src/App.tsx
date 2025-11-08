import { Modal, Button } from '@allxsmith/bestax-bulma';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Button color="primary" onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      <Modal isActive={showModal}>
        <Modal.Background onClick={closeModal} />
        <Modal.Card>
          <Modal.Card.Head>
            <Modal.Card.Title>Intuitive API</Modal.Card.Title>
            <Modal.Close onClick={closeModal} />
          </Modal.Card.Head>
          <Modal.Card.Body>Components that make sense!</Modal.Card.Body>
          <Modal.Card.Foot>
            <Button color="primary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Card.Foot>
        </Modal.Card>
      </Modal>
    </>
  );
}

export default App
