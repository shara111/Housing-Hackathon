import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function CleanlinessInput({ register }) {
  return (
    <>
      <Card>
        <Card.Body>
          <h4>Cleanliness</h4>
          <br />
          <label>How often do you clean the kitchen</label>
          <br/>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanKitchens"
                id="inlineRadio1"
                value="Daily"
                {...register("cleanKitchens")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanKitchens"
                id="inlineRadio2"
                value="Few times a week"
                {...register("cleanKitchens")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanKitchens"
                id="inlineRadio2"
                value="Few times a month"
                {...register("cleanKitchens")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanKitchens"
                id="inlineRadio2"
                value="Few times a year"
                {...register("cleanKitchens")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
          </div>
          <br/>
          <br/>
          <label>How often do you clean the bathroom?</label>
          <br/>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanBathrooms"
                id="inlineRadio1"
                value="Daily"
                {...register("cleanBathrooms")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanBathrooms"
                id="inlineRadio1"
                value="Few times a week"
                {...register("cleanBathrooms")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanBathrooms"
                id="inlineRadio1"
                value="Few times a month"
                {...register("cleanBathrooms")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanBathrooms"
                id="inlineRadio1"
                value="Few times a year"
                {...register("cleanBathrooms")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
          </div>
          <br/>
          <br/>
          <label>How often do you clean your personal room?</label>
          <br/>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanPersonalRoom"
                id="inlineRadio1"
                value="Daily"
                {...register("cleanPersonalRoom")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanPersonalRoom"
                id="inlineRadio1"
                value="Few times a week"
                {...register("cleanPersonalRoom")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanPersonalRoom"
                id="inlineRadio1"
                value="Few times a month"
                {...register("cleanPersonalRoom")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanPersonalRoom"
                id="inlineRadio1"
                value="Few times a year"
                {...register("cleanPersonalRoom")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
          </div>
          <br/>
          <br/>
          <label>How often do you clean shared living spaces?</label>
          <br/>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanSharedSpaces"
                id="inlineRadio1"
                value="Daily"
                {...register("cleanSharedSpaces")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanSharedSpaces"
                id="inlineRadio1"
                value="Few times a week"
                {...register("cleanSharedSpaces")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanSharedSpaces"
                id="inlineRadio1"
                value="Few times a month"
                {...register("cleanSharedSpaces")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="cleanSharedSpaces"
                id="inlineRadio1"
                value="Few times  year"
                {...register("cleanSharedSpaces")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
