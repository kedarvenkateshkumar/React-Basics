import React, { useState, useEffect } from 'react';


function Clock(){
    const [Time , setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() =>{
        const Time = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);

        return ()=> clearInterval(Time);
    },[]);
    return <h2>🕒 Time: {Time}</h2>;
}

export default  Clock;


