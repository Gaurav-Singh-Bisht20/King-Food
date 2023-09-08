import React, { useState } from "react"
import { Outlet } from "react-router-dom"
// import { Outlet } from "react-router-dom"

const ShowSection=({title,description,isvisble,setIsvisible})=>{
    
    return(
        <div className="border-4 border-orange-300 my-5">
            <h1>{title}</h1>
            {
                isvisble ?(<button onClick={()=>{
                    setIsvisible(false);
                }}>hide</button>):
                (<button onClick={()=>{
                    setIsvisible(true);
                }}>show</button>)
            }
            
            {isvisble && <h2>{description}</h2>}
       
        </div>
    )

}

const Section=()=>{
    const [isvisbleSec,setIsvisibleSec]=useState("policy-1");
    return(
        <div>
            <ShowSection 
            title={"policy-1"} 
            description={" Lore took a galley of type and scrambled it to make a type en the industry's standard dumm" }
            isvisble={isvisbleSec==="Policy-1"}
            setIsvisible={()=>{
                setIsvisibleSec("Policy-1")
            }}
            />

            <ShowSection title={"policy-2"} description={" Lorem ce the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  Lorem Ipsum has been the industry's standard dumm" }
            isvisble={isvisbleSec==="Policy-2"}
            setIsvisible={()=>{
                setIsvisibleSec("Policy-2")
            }}/>

            <ShowSection title={"policy-3"} description={" Lospecimen book. It has  Lorem Ipsum has been the industry's standard dumm" }
            isvisble={isvisbleSec==="Policy-3"}
            setIsvisible={()=>{
                setIsvisibleSec("Policy-3")
            }}/>

        </div>
    )
}

export default Section;