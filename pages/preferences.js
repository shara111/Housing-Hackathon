import Card from 'react-bootstrap/Card';
import {useForm} from 'react-hook-form'; 


export default function Preferences(){
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: {
            //religion 
            typeOfReligion: "", 
            religionNotes: "",
            //Pets 
            hasPets : true, 
            petType : "", 
            numPets: 0, 
            petNotes: "",

            //Cooking and eating
            foodYouCook : [], 
            restrictions : [],

            // guests
            dayTimeGuests: "", 
            dayTimeGuestsFreq: "", 
            nightTimeGuests : "", 
            nightTimeGuestsFreq : "", 

            //substance consumption 
            tobacco : false, 
            alcohol : false, 
            cannabis : false,
            alocoholFreq : "", 
            tobaccoFreq : "",
            cannabisFreq : "", 

            //cleanliness
            cleansKitchen : "", 
            cleansBathroom: "", 
            cleanPersonalRoom: "", 
            cleanSharedSpaces: "",
        },
    });

    const onSubmit = async (data) => {
        try{
            const response = await fetch ('/api/preferences', {
                method: 'POST', 
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(data),
            }) ; 
        } catch (error) {
            console.log("Error: ", error.message); 
        }
    }

    return (
        <>
            <h2> Preferences </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* RELIGION INPUT*/}
                <Card>
                    <Card.Body>
                    <label>Religion</label><br/>
                    <input type="text" placeholder='Religion' {...register('typeOfReligion')}/> <br/><br/>
                    <label>notes</label><br/>
                    <input type="text" placeholder='notes' {...register('religionNotes')}/> <br/> <br/>
                    </Card.Body>
                </Card>
                <br/>
                <Card>
                    <Card.Body>
                        <label> I have a pet</label>
                        <input
                            type='checkbox'/>
                    </Card.Body>
                </Card>

                

            </form>
        </>
    )
}