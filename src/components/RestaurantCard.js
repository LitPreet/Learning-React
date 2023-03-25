import { useContext } from "react"
import { IMG_CDN_URL } from "../constant"
import UserContext from "../utils/UserContext"
const RestrauntCard =({name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
    const {user} = useContext(UserContext)
    return (
        <div className='card w-[200px] p-2 m-2 shadow-lg bg-cyan-200'>
            <img src = {IMG_CDN_URL + cloudinaryImageId} className='w-48'/>
            <h3 className="font-bold text-xl">{name}</h3>
            <h3>{cuisines.join(',')}</h3>
            <h4>{lastMileTravelString}</h4>
            <h2 className="font-bold text-red-600 ">{user.name}</h2>
        </div>
    )
}

export default RestrauntCard