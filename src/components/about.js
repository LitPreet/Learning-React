import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./profile";
import Profile from "./profileClass";
import { Component } from "react";

const About2 = ()=>{
return(
    <div className="">
        <h1>About us page</h1>
         <p>
            This is the namaste React Live Course 07 - finding the path
         </p>
       
         <Profile name={"PreetClass"}/>
    </div>
);
};

class About extends Component {
constructor(props)
{
    super(props);
   
    console.log("parent Constructor")
}
 componentDidMount()
{
  
    console.log("parent ComponentDidMount")
}
render(){
    console.log("parent- rendering...")
    return(
        <div className="">
            <h1>About us page</h1>
             <p>
                This is the namaste React Live Course 07 - finding the path
             </p>
          
             <Profile name={"first-child"}/>
        </div>
    );
}
}
export default About