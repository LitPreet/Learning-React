import { useState ,useEffect } from "react";
import { swiggy_menu_api_URL ,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY} from "../constant";
const useRestaurant = (id) =>{

    const [restaurant,setRestaurant] = useState(null);
    const [menuItems,setMenuItems] = useState([]);
    //get data from API

    useEffect(()=>{
        getRestaurantInfo();
    },[])
    
     async function getRestaurantInfo (){
        try{
      const response = await fetch(swiggy_menu_api_URL + id);
      const json = await response.json();

      // set restaurant data
      const restaurantData = json?.data?.cards.map(x=> x.card).find(x=> x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      //set menu items data
      const menuItemData = json?.data?.cards?.find(x=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.
      cards?.map(x => x.card?.card)?.
      filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
      map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      setMenuItems(menuItemData);
        }
        catch(error){
            setMenuItems([]);
            setRestaurant(null);
            console.log(error);
        }
    }

    // return restaurant data
    return restaurant;
    return menuItems;

}
export default useRestaurant 