import { Card } from "react-bootstrap";
import { useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function PetInput() {

  const [isChecked, setIsChecked] =useState(false);

  const handleCheckbox = () =>{
    setIsChecked(!isChecked)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h4>Pets</h4>
          <input 
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
            name="hasPets"
          />
          <label> I have a pet</label>
          <br/>
          <br/>
          <label>What Pets do you have?</label>
          <br/>
          <input type="text"name="petType" disabled={!isChecked} placeholder="Cat, Dog, Fish..."/>
          <br/>
          <br/>
          <label>How many pets do you have</label>
          <br/>
          <input type="text" name="numPets" disabled={!isChecked} placeholder="1"/>
          <br/>
          <br/>
          <label>Notes</label>
          <br/>
          <input type="text" name="petNotes" disabled={!isChecked} placeholder="My dog is really friendly!"/>
          
          
        </Card.Body>
      </Card>
    </>
  );
}
