import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate, Navigate } from '@reach/router';
import '../App.css';

const CreateRestaurant = (props) => {
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ errors, setErrors ] = useState({}); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // creating new object then using it on post
        const newRestaurant = {
            name,
            address
        };
        // Could also build the object in the axios instead of calling the object
        axios.post('http://localhost:8000/api/restaurant', newRestaurant)
            .then((res) => {
                console.log(res.data);
                navigate(`http://localhost:8000/api/restaurant/${res.data._id}`);
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response);
                // err.response is the body that you get in  postman
                if(err.response.data.errors) {
                    // save the errors in state so I can display them
                    setErrors(err.response.data.errors);
                }
            });
    }

    return(
        <div>
            <h2>Create Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Restaurant Name: </label>
                    {/* display error messages on validation errors */}
                    {
                        errors.name &&
                        <p className='errors'>{errors.name.message}</p>
                    }
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label>Address: </label>
                    {/* display error messages on validation errors */}
                    {
                        errors.address &&
                        <p className='errors'>{errors.address.message}</p>
                    }
                    <input 
                        type="text" 
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>


    )
}

export default CreateRestaurant;