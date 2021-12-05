import './App.css';
import { Router } from '@reach/router';
import AllRestaurants from './components/AllRestaurants';
import CreateRestaurant from './components/CreateRestaurant';
import UpdateRestaurant from './components/UpdateRestaurant';
import RestaurantDetails from './components/RestaurantDetails';
import DeleteRestaurant from './components/DeleteRestaurant';


function App() {
  return (
    <div className="App">
      <h1>Welcome to our Restaurants App</h1>
      <Router>
        <AllRestaurants default path="/restaurants" />
        <CreateRestaurant path="/restaurants/new" />
        <RestaurantDetails path="/restaurants/:id" />
        <UpdateRestaurant path="/restaurants/:id/edit" />

      </Router>
      
    </div>
  );
}

export default App;
