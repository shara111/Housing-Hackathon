import CleanlinessInput from "@/components/CleanlinessInput";
import CookingInput from "@/components/CookingInput";
import GuestInput from "@/components/GuestInput";
import PetInput from "@/components/PetInput";
import ReligionInput from "@/components/ReligionInput";
import SubConsumptionInput from "@/components/SubConsumptionInput";
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
        <GuestInput register={register} />
        <br />

        {/* RELIGION INPUT*/}
        <ReligionInput register={register} />
        <br />

        {/* Cooking and Eating INPUT*/}
        <CookingInput register={register} />
        <br />

        {/* Cleaniness INPUT*/}
        <CleanlinessInput register={register} />
        <br />

        {/* Pets INPUT*/}
        <PetInput register={register} />
        <br />

        {/* Substance Comsumption INPUT*/}
        <SubConsumptionInput register={register} />
        <br />
        <Button type="submit">Save & Next</Button>
      </Form>
    </>
  );
}
