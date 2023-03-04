import { restaurantList } from "../constant";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ReactDOM  from 'react-dom/client';
import { Link } from "react-router-dom";

//props -properties
// whenever say pass the props it means pass the data to functional component
//react hooks are just functions

function filterData(searchText,restaurants)
{
const filterData = restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
return filterData;
}

const Body = () =>{
    // variable in js
    // const searchText = "KFC";
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [filterdRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); // a local state variable in react

    useEffect(()=>{
        getRestaurant();
    },[]);

async function getRestaurant()
{
    const data = await fetch("https://corsanywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

}
if(!AllRestaurants) return null;
// if(filterdRestaurants?.length == 0) return <h1>No Result found😓😓</h1>

    return (AllRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-conatiner">
            <input type="text"
            className="search-input"
            placeholder="search"
             value={searchText}
             onChange={(e)=> setSearchText(e.target.value)} />
             <button className="search-btn" 
             onClick={()=>{
            // need to filter the data
             const data = filterData(searchText,AllRestaurants);
            // update the state
            setfilteredRestaurants(data);
             }
             }
             >Search</button>
        </div>
        <div className='restraunt-list'>
            {filterdRestaurants.map(restaurant =>{
                return (
                <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}> 
                <RestrauntCard {...restaurant.data} />
                </Link>
                )
            })}
           
        </div>
        </>
    )
}
export default Body