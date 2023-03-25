import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer =()=>{
    const {user} = useContext(UserContext)
    return (
        <div className="w-full bg-green-300 h-[100px] flex justify-center items-center flex-col">
        <h1 className="font-bold text-black text-md">This Site is developed by {user.name}</h1>
        <h1 className="font-bold text-black text-md">reach me out at {user.email}</h1>
        </div>
    )
}
export default Footer