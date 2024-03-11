import { Card, Form } from "react-bootstrap";
import { useState } from "react";



export default function CookingInput() {
  const [foodOptions, setFoodOptions] = useState([]);
  const [restrictions, setRestrictions] = useState([]);
  
  const handleFoodChange = (e) => {
    const selectedFood = Array.from(e.target.selectedOptions, (option) => option.value);
    setFoodOptions(selectedFood);
  };

  const handleRestrictionsChange = (e) => {
    const selectedRestrictions = Array.from(e.target.selectedOptions, (option) => option.value);
    setRestrictions(selectedRestrictions);
  }
  return (
    <>
      <Card>
        <Card.Body>

            <h4>Cooking and eating habits</h4>
            <label>What kind of food do you cook? (Can choose more than one)</label>
            <Form.Select multiple value={foodOptions} onChange={handleFoodChange}>
              <option value="Chicken">Chicken</option>
              <option value="Pork">Pork</option>
              <option value="Sea Food">Sea Food</option>
              <option value="Beef">Beef</option>
              <option value="Other">Other</option>
            </Form.Select>
            <br/>
            <br/>
            <label>Do you have any restrictions?</label>
            <Form.Select multiple value={restrictions} onChange={handleRestrictionsChange}>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Peanut Allergies">Peanut Allergy</option> 
              <option value="Hallal">Hallal</option>         
            </Form.Select>

        </Card.Body>
      </Card>
    </>
  );
}
