import { Card } from "react-bootstrap";

export default function PetInput({ register }) {
  return (
    <>
      <Card>
        <Card.Body>
          <label>Religion</label>
          <br />
          <input type="text" placeholder="Religion" {...register("typeOfReligion")} /> <br />
          <br />
          <label>notes</label>
          <br />
          <input type="text" placeholder="notes" {...register("religionNotes")} /> <br /> <br />
          <label> I have a pet</label>
          <input type="checkbox" />
        </Card.Body>
      </Card>
    </>
  );
}
