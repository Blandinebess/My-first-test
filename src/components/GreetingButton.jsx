import React , {useState}from "react";

export default function GreetingButton(){
    const [greeting, setGreeting]=useState(false);

    return(
        <div> 
            <button onClick={()=> setGreeting(true)}> Say Hello </button>
            {greeting && <p>Hello</p>}
        </div>
    )
};