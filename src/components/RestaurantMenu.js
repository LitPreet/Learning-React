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

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
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
    <div className="Menu">
      <div>
        <h1>restaurant id : {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {menuItems.map((item) => (
            <>
            <li key={item?.id}>{item?.name}</li>
            <div> {item?.imageId && (
                    <img
                      className="menu-item-img"
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
