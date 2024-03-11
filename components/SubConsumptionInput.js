import { Card } from "react-bootstrap";
import { useState } from "react";

export default function SubConsumptionInput({ register }) {

  const[tobaccoChecked, setTobaccoChecked] = useState(false)
  const handleTobacco =() =>{
    setTobaccoChecked(!tobaccoChecked)
  }

  const[alcoholChecked, setAlcoholChecked] = useState(false)
  const handleAlcohol = () =>{
    setAlcoholChecked(!alcoholChecked)
  }

  const[cannabischecked, setCannabisChecked] = useState(false)
  const handleCannabis =() => {
    setCannabisChecked(!cannabischecked)
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h4>Substance Consumption 
          </h4>
          <br/>

          <input
            type="checkbox"
            checked={tobaccoChecked}
            onChange={handleTobacco}
            name="tobaccoFreq"
          /> 
          <label class="form-check-label" for="inlineRadio1">
            I smoke tobacco
          </label>
          <br/>
          <label>How often do you use tobacco?</label>
          <br/>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="tobaccoFreq"
                id="inlineRadio1"
                value="Daily"
                disabled={!tobaccoChecked}
                {...register("tobaccoFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="tobaccoFreq"
                id="inlineRadio1"
                value="Few times a week"
                disabled={!tobaccoChecked}
                {...register("tobaccoFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
          </div>
          <div class="form-check form-check-inline">
            <input
                class="form-check-input"
                type="radio"
                name="tobaccoFreq"
                id="inlineRadio1"
                value="Few times a month"
                disabled={!tobaccoChecked}
                {...register("tobaccoFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="tobaccoFreq"
                id="inlineRadio1"
                value="Few times a year"
                disabled={!tobaccoChecked}
                {...register("tobaccoFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
            </div>
            <br/>
            <br/>

          <input
            type="checkbox"
            checked={alcoholChecked}
            onChange={handleAlcohol}
            name="tobaccoFreq"
            value="Daily"
          /> 
          <label class="form-check-label" for="inlineRadio1">
            I drink alcohol
          </label>
          <br/>
          
          <label>How often do you drink alcohol</label>
          <br/>
          <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!alcoholChecked}
                type="radio"
                name="alcoholFreq"
                id="inlineRadio1"
                value="Few times a year"
                {...register("alcoholFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!alcoholChecked}
                type="radio"
                name="alcoholFreq"
                id="inlineRadio1"
                value="Few times a week"
                {...register("alcoholFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!alcoholChecked}
                type="radio"
                name="alcoholFreq"
                id="inlineRadio1"
                value="Few times a month"
                {...register("alcoholFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!alcoholChecked}
                type="radio"
                name="alcoholFreq"
                id="inlineRadio1"
                value="Few times a year"
                {...register("alcoholFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a year
              </label>
            </div>
            <br/>
            <br/>

            <input
              type="checkbox"
              checked={cannabischecked}
              onChange={handleCannabis}
              name="cannabis"
            />
            <label>I use cannabis</label>
            <br/>
            <label>How often do you use Cannabis?</label>
            <br/>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!cannabischecked}
                type="radio"
                name="cannabisFreq"
                id="inlineRadio1"
                value="Few times a year"
                {...register("cannabisFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Daily
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!cannabischecked}
                type="radio"
                name="cannabisFreq"
                id="inlineRadio1"
                value="Few times a week"
                {...register("cannabisFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a week
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!cannabischecked}
                type="radio"
                name="cannabisFreq"
                id="inlineRadio1"
                value="Few times a month"
                {...register("cannabisFreq")}
              /> 
              <label class="form-check-label" for="inlineRadio1">
                Few times a month
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                disabled={!cannabischecked}
                type="radio"
                name="cannabisFreq"
                id="inlineRadio1"
                value="Few times a year"
                {...register("cannabisFreq")}
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
