import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, Navigate } from '@reach/router';

const RestaurantDetails = (props) => {
    const { id } = props;
    const [ restaurant, setRestaurant] = useState({});
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/restaurant/${id}`)
            .then((res) => {
                console.log(res.data);
                setRestaurant(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [])

    return(
        loaded && 
        <div>
            <h2>Restaurant : {restaurant.name}</h2>
            <p>Address: {restaurant.address} </p>
            <p><Link to={`/restaurants/${id}/edit`}>Edit</Link> </p>
        </div>
    )
}

export default RestaurantDetails;