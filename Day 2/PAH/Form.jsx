import React,{useState} from 'react';
const Form =() => {
    const [formData,setFormData]=useState({
        Name:'',
        Email:'',
        Message:' '
        }
    )

    const handleChangeEvent = (event) => {
        const{name,value} = event.target;
        setFormData({
            ...formData,
            [name]: value 
        }
        )
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData);
    }
    return(
        <>
        <h1>Basic Form</h1>
        <form method='POST' onSubmit={handleSubmit}>

                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="Name" onChange={handleChangeEvent}/>
                <br></br>


                <label htmlFor="Email">Email:</label>
                <input type="text" name="Email" id="Email" onChange={handleChangeEvent} />
                <br></br>

                <label htmlFor="Message">Message:</label>
                <input type="text" name="Message" id="Message" onChange={handleChangeEvent} />
                <br></br>

            
            <button type="Submit" onSubmit={handleSubmit}>Submit</button>

        </form>
        </>
    )
}
export default Form;