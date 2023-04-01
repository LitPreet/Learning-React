import React from "react";
import {
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constant";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const dispatch = useDispatch();

  const addFoodItem = (item)=>{
dispatch(addItem(item))

  }
  //get data from API

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + id);
      const json = await response.json();

      // set restaurant data
      const restaurantData =
        json?.data?.cards
          .map((x) => x.card)
          .find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
          ?.info || null;
      setRestaurant(restaurantData);

      //set menu items data
      const menuItemData =
        json?.data?.cards
          ?.find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];
      setMenuItems(menuItemData);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex">
        <h1>restaurant id : {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} className="w-[300px]"/>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>

      <div>
        
        <h1 className="text-center font-bold text-[20px]">Menu</h1>
        <ul className="flex flex-wrap flex-col justify-center items-center">
          {menuItems.map((item) => (
            <>
            <li key={item?.id} >{item?.name}<button className="font-bold p-2 m-5 bg-green-300" onClick={()=> addFoodItem(item)}>Add</button></li>
            <div> {item?.imageId && (
                    <img
                      className="w-[100px]"
                      src={IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}</div>
            </>
          ))}
        
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
