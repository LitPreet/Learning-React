import React from 'react';
// import ReactDOM  from 'react-dom/client';
// import { restaurantList } from "../constant";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
// import ReactDOM  from 'react-dom/client';
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";

//props -properties
// whenever say pass the props it means pass the data to functional component
//react hooks are just functions



const Body = () =>{
    // variable in js
    // const searchText = "KFC";
    const [AllRestaurants, setAllRestaurants] = useState([]);
    const [filterdRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); // a local state variable in react
    const{user,setUser} = useContext(UserContext)

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

const isOnLine = useOnline();
if(!isOnLine)
{
    return <h1>🎈😓 looks like you are offline please check your internet connection</h1>
}

if(!AllRestaurants) return null;
// if(filterdRestaurants?.length == 0) return <h1>No Result found😓😓</h1>

    return (AllRestaurants.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-conatiner">
            <input type="text"
            className="search-input p-2 "
            placeholder="search"
             value={searchText}
             onChange={(e)=> setSearchText(e.target.value)} />
             <button className="search-btn p-2 m-2 bg-purple-900 hover:bg-purple-500 text-white rounded-md" 
             onClick={()=>{
            // need to filter the data
             const data = filterData(searchText,AllRestaurants);
            // update the state
            setfilteredRestaurants(data);
             }
             }
             >Search</button>
             <input type = "text" onChange={ e => setUser({name:e.target.value,
            email:'dpp@gmail.com'})}></input>
        </div>
        <div className='flex flex-wrap'>
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