import React from 'react'
import { useState } from "react";


const Profile = (props) => {
    const [count,setCount] = useState(0);
  return (
    <div>
    <h1>name: {props.name}</h1>
    <h1>count: {count}</h1>
 <h2>Profile component</h2>
 <button onClick={()=>{
    setCount(count+1);
 }}>click me</button>
 </div>
  )
}

export default Profile