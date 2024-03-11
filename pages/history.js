import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">BOOM</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Allah Akbar</h1>
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
        <Card.Header as="h4">Name: Adopt Hit Lir</Card.Header>
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
              On September 11, 2001, terrorists linked to the Islamic extremist group al Qaeda—founded by Osama bin
              Laden—hijacked four commercial passenger airplanes and carried out suicide attacks against targets in the
              United States. Two of the planes were flown into the World Trade Center in New York City. Within a few
              hours, both of the twin towers collapsed into rubble, demolishing a large section of lower Manhattan. A
              third plane hit the Pentagon in Arlington, Virginia, just outside Washington, D.C. The passengers and crew
              of the fourth plane fought back, and the plane was downed in a field near Shanksville, Pennsylvania.
              Almost 3,000 people were killed in the 9/11 terrorist attacks, including the 19 al Qaeda terrorists. The
              shocking events of September 11 were televised globally and left much of the world reeling in horror. The
              administration of President George W. Bush responded by declaring a “war on terrorism,” including the
              creation of the Department of Homeland Security and the invasion of Afghanistan.
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
