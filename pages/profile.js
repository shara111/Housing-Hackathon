import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div style={{ padding: "10px" }}>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ paddingTop: "20px" }}>
        <Row className="mb-4" style={{ gap: "20px" }}>
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>First name *</Form.Label>
            <Form.Control required type="text" placeholder="First name" defaultValue="" />
            <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Last name *</Form.Label>
            <Form.Control required type="text" placeholder="Last name" defaultValue="" />
            <Form.Control.Feedback type="invalid">Last name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationPreferredname">
            <Form.Label>Preferred Name *</Form.Label>
            <Form.Control required type="text" placeholder="Preferred Name" defaultValue="" />
            <Form.Control.Feedback type="invalid">Preferred Name is required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationEmail">
            <Form.Label>Email *</Form.Label>
            <Form.Control required type="text" placeholder="Email" defaultValue="" />
            <Form.Control.Feedback type="invalid">Email address is required.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationPronoun">
            <Form.Label>Pronoun *</Form.Label>
            <Form.Control required type="text" placeholder="Pronoun" defaultValue="" />
            <Form.Control.Feedback type="invalid">Pronoun is required.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationAge">
            <Form.Label>Age *</Form.Label>
            <Form.Control required type="text" placeholder="Age" defaultValue="" />
            <Form.Control.Feedback type="invalid">Age is required.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationPhonenumber">
            <Form.Label>Phone Number *</Form.Label>
            <Form.Control required type="text" placeholder="Phone Number" defaultValue="" />
            <Form.Control.Feedback type="invalid">Phone Number is required.</Form.Control.Feedback>
            <Form.Text className="text-muted">
              Enter only the digits of the phone number without any hyphens (-) or spaces. Preferably provide us a
              mobile number.
            </Form.Text>
          </Form.Group>
          <Form.Group md="4" controlId="duedate">
            <Form.Label>Date of Birth *</Form.Label>
            <Form.Control
              type="date"
              name="duedate"
              placeholder="Due date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">Date of Birth is required.</Form.Control.Feedback>
            <Form.Text className="text-muted">You must be at least 18 years old to create an account</Form.Text>
          </Form.Group>
          <Form.Group md="4" controlId="validationSchool">
            <Form.Label>Post Secondary Institution *</Form.Label>
            <Form.Control required type="text" placeholder="School" defaultValue="" />
            <Form.Control.Feedback type="invalid">School is required.</Form.Control.Feedback>
          </Form.Group>
          <Form.Group md="4" controlId="validationCountry">
            <Form.Label>Country of Birth *</Form.Label>
            <Form.Control required type="text" placeholder="Country" defaultValue="" />
            <Form.Control.Feedback type="invalid">Country is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationSex">
            <Form.Label>Gender *</Form.Label>
            <Form.Control required type="text" placeholder="Gender" defaultValue="" />
            <Form.Control.Feedback type="invalid">Gender is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationLanguages">
            <Form.Label>In what languages are you fluent? *</Form.Label>
            <Form.Control required type="text" placeholder="Language" defaultValue="" />
            <Form.Control.Feedback type="invalid">Language(s) is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationOffence">
            <Form.Label>Have you been charged or convicted of a criminal offense? *</Form.Label>
            <Form.Control required type="text" placeholder="Offence" defaultValue="No" />
            <Form.Control.Feedback type="invalid">Offence is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationPhotoURL">
            <Form.Label>PhotoURL *</Form.Label>
            <Form.Control required type="text" placeholder="PhotoURL" defaultValue="" />
            <Form.Control.Feedback type="invalid">PhotoURL is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationResidencystatus">
            <Form.Label>Residency Status *</Form.Label>
            <Form.Control required type="text" placeholder="Residency Status" defaultValue="" />
            <Form.Control.Feedback type="invalid">Residency Status is required</Form.Control.Feedback>
          </Form.Group>

          <Form.Group md="4" controlId="validationNotes">
            <Form.Label>Notes *</Form.Label>
            <Form.Control required type="text" placeholder="Notes" defaultValue="" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Save & Next</Button>
      </Form>
    </div>
  );
}
