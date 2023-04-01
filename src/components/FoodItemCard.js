
import { useDispatch } from "react-redux"
import { IMG_CDN_URL } from "../constant"
import { removeItem } from "../utils/cartSlice";

const FoodItem =({name,description,imageId,price,id})=>{
   const dispatch = useDispatch();
   const handleClearItem = (id) =>{
        dispatch(removeItem(id));
   }
    return (
        <>
        <div className="flex flex-col">
        <div className='card w-[200px] p-2 m-2 shadow-lg bg-cyan-200'>
            <img src = {IMG_CDN_URL + imageId} className='w-48'/>
            <h3 className="font-bold text-xl">{name}</h3>
            <h3>{description}</h3>
            <h4> ₹{price/100}</h4>
        </div>
        <button className='m-4 p-2 bg-green-300 font-bold' onClick={()=> handleClearItem(id)}>Delete Item</button>
        </div>
        </>
    )
}

export default FoodItem