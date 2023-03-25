import  React  from "react";
import ReactDOM  from 'react-dom/client';
import { useState ,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";

 const LogginUser = ()=>{
    return true;
 }
const Title = () => (
    <a href ="/">
   <img className ="h-[75px]" src='https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj'/>
   </a>

);

 const Header = () =>{
    const [isLoggedin,setisLoggedin] = useState(false)
    const isOnline = useOnline();
    const {user} = useContext(UserContext);

   
    return (
    <div className= "flex justify-between h-[80px] items-center bg-pink-300 shadow-lg">
       <Title/>
        <div >
            <ul className='flex'>
                <Link to="/"><li className="px-2 ">Home</li></Link>
                <Link to="/about"><li className="px-2">About</li></Link>
                <Link to="/contact"><li className="px-2">Contact</li></Link>
                <Link to="/Instamart"><li className="px-2">Instamart</li></Link>
                <li className="px-2">Cart</li>
                <li className="px-2">{isOnline ? "✅" : "🔴"}</li>
                <h1 className="font-bold text-red-500 ">{user.name}</h1>
            </ul>
        </div>
        {isLoggedin ? <button onClick={()=>setisLoggedin(false)}>Log In</button>:  <button onClick={()=>setisLoggedin(true)}>Log out</button>}
      
     
    </div>);
}
export default Header
