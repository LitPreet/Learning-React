import { IMG_CDN_URL } from "../constant"
const RestrauntCard =({name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
    
    return (
        <div className='card'>
            <img src = {IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(',')}</h3>
            <h4>{lastMileTravelString} Minutes</h4>
        </div>
    )
}

export default RestrauntCard