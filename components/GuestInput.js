import Card from "react-bootstrap/Card";
import React from "react";
export default function GuestInput({ register }) {
  return (
    <>
      <Card>
        <Card.Body>
          <h4>Guest</h4>
          <br />
          <h5>Day Time Guests</h5>
          {/* Question 1 */}
          <p>How often would you like to have daytime guests visit you at the home? </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Daily
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Never
            </label>
          </div>
          <br />
          <br />
          {/* Question 2 */}
          <p>How often can your host have daytime guests? </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Daily/No Preference
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuestsFreq")}
            />
            <label class="form-check-label" for="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />

            <label class="form-check-label" for="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuestsFreq")}
            />
            <label class="form-check-label" for="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Never
            </label>
          </div>

          {/* Question 3 */}
          <br />
          <br />
          <br />
          <h5>Overnight Guests</h5>
          <p>How often would you like to have overnight guests stay with you in your homeshare arrangement? </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("nightTimeGuests")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Daily
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">
              Never
            </label>
          </div>
          <br />
          <br />
          {/* Question 4 */}
          <p>How often can your host have overnight guests? </p>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("nightTimeGuestsFreq")}
            />
            <label class="form-check-label" for="inlineRadio1">
              Daily/No Preference
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">
              Never
            </label>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
