import { useState } from "react";

 const LogginUser = ()=>{
    return true;
 }


 const Title = () => (
    <a href ="/">
   <img className ="logo" src='https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj'/>
   </a>

);

 const Header = () =>{
    const [isLoggedin,setisLoggedin] = useState(false)
    return (
    <div className= "header">
       <Title/>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedin ? <button onClick={()=>setisLoggedin(false)}>Log In</button>:  <button onClick={()=>setisLoggedin(true)}>Log out</button>}
      
     
    </div>);
}
export default Header
