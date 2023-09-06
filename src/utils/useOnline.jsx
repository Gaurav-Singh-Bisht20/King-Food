import { useEffect, useState } from "react"

const useOnline=()=>{
    const [isOnline, setOnline]=useState(true);

    useEffect(()=>{

        const handleOffline=() => {
            setOnline(false);
          }
         const handleOnline= () => {
           setOnline(false);
          };
          
          window.addEventListener("online",handleOnline );
          window.addEventListener("offline",handleOffline );
    },[]);

    return isOnline;
}

export default useOnline;