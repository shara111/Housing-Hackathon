import { Card } from "react-bootstrap";
import Form from "react-bootstrap";

export default function ReligionInput({ register }) {
  return (
    <>
      <Card>
        <Card.Body>
            <h4>Religion</h4>
            <br/>
            <label>Religion</label>
            <br />
            <input type="text" placeholder="Religion" {...register("typeOfReligion")} /> <br />
            <br />
            <label>notes</label>
            <br />
            <input type="text" placeholder="notes" {...register("religionNotes")} /> <br /> <br />
        </Card.Body>
      </Card>
    </>
  );
}
