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
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Daily
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Never
            </label>
          </div>
          <br />
          <br />
          {/* Question 2 */}
          <p>How often can your host have daytime guests? </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Daily/No Preference
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuestsFreq")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />

            <label className="form-check-label" htmlFor="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              {...register("dayTimeGuestsFreq")}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("dayTimeGuestsFreq")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Never
            </label>
          </div>

          {/* Question 3 */}
          <br />
          <br />
          <br />
          <h5>Overnight Guests</h5>
          <p>How often would you like to have overnight guests stay with you in your homeshare arrangement? </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("nightTimeGuests")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Daily
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Never
            </label>
          </div>
          <br />
          <br />
          {/* Question 4 */}
          <p>How often can your host have overnight guests? </p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              {...register("nightTimeGuestsFreq")}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Daily/No Preference
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a week
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Few times a month
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Few times a year
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Never
            </label>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}
