import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default function Index() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card>
      <Card.Header as="h5">Name: Adopt Hit Lir</Card.Header>
      <Card.Body
        style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexDirection: "column" }}
      >
        <div>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        </div>
        <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
          Go somewhere
        </Button>
        <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  );
}
