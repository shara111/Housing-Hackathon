import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";

export default function Preferences() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //religion
      typeOfReligion: "",
      religionNotes: "",
      //Pets
      hasPets: true,
      petType: "",
      numPets: 0,
      petNotes: "",

      //Cooking and eating
      foodYouCook: [],
      restrictions: [],

      // guests
      dayTimeGuests: "",
      dayTimeGuestsFreq: "",
      nightTimeGuests: "",
      nightTimeGuestsFreq: "",

      //substance consumption
      tobacco: false,
      alcohol: false,
      cannabis: false,
      alocoholFreq: "",
      tobaccoFreq: "",
      cannabisFreq: "",

      //cleanliness
      cleansKitchen: "",
      cleansBathroom: "",
      cleanPersonalRoom: "",
      cleanSharedSpaces: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h1>Edit My Preferences</h1>
          <br />
          <p>Let us know about your preferences and find you a better house</p>
        </Card.Body>
      </Card>
      <br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* GUEST INPUT*/}
        <Card>
          <Card.Body>
            <h4>Guest</h4>
            <br />
            <h5>Day Time Guests</h5>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
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
              />
              <label class="form-check-label" for="inlineRadio1">
                Never
              </label>
            </div>
            <br />
            <label>notes</label>
            <br />
            <input type="text" placeholder="notes" {...register("religionNotes")} /> <br /> <br />
            <label> I have a pet</label>
            <input type="checkbox" />
          </Card.Body>
        </Card>
        <br />

        {/* RELIGION INPUT*/}
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
        <br />

        {/* Cooking and Eating INPUT*/}
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
        <br />

        {/* Only men only women INPUT*/}
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
        <br />

        {/* Pets INPUT*/}
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
        <br />

        {/* Substance Comsumption INPUT*/}
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
        <br />
        <Button type="submit">Save & Next</Button>
      </Form>
    </>
  );
}
