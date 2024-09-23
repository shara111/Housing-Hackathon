import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Information</h1>
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
    <>
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>

            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
            
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
             
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
            
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
             
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
             
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
      <br /> <br /> <br />
      <Card>
        <Card.Header as="h4">Name: History</Card.Header>
        <Card.Body
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div>
            <Card.Title style={{ fontSize: "30px" }}>Home for Two Man and One Room </Card.Title>
            <br />
            <Card.Text style={{ fontSize: "20px", lineHeight: "1.7" }}>
             
            </Card.Text>
          </div>
          <Button variant="primary" className="align-self-end" onClick={() => setModalShow(true)}>
            View
          </Button>
          <ShowModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
        <br />
      </Card>
    </>
  );
}
