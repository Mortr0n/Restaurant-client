import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Navigate } from '@reach/router';

const CreateRestaurant = (props) => {
    const [ name, setName ] = useState("");
    const [ address, setAddress ] = useState("");
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRestaurant = {
            name,
            address
        }
        
        axios.post(`http://localhost:8000/api/restaurant/`, newRestaurant)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return(
        <div>
            <h2>Create Restaurant</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Restaurant Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <label>Address: </label>
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