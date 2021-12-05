import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Navigate } from '@reach/router';

const AllRestaurants = (props) => {
    // Set state for restaurants and whether they have loaded or not
    const [ restaurants, setRestaurants ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/restaurant/')
            .then((res) => {
                console.log(res);
                setRestaurants(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, []);

    return(
        <div>
            <h2>All Restaurants</h2>
            {
                restaurants.map((restaurant, index) => {
                    return(
                        <div key={index}>
                        <p><Link to={`/restaurants/${restaurant._id}`}> {restaurant.name}</Link> </p>
                        <hr/>
                    </div>
                    )
                    
                })
            }
        </div>
    )
}

export default AllRestaurants;