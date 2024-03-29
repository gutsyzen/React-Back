import React, { useState } from 'react'

const Greeting = ({ isUserLoggedIn}) =>(
    <div>
        {isUserLoggedIn ? (
            <h1>Go away</h1>
        ):(
            <h1>Bye</h1>
        )
        }
    </div>
)

const Ter = () => {
    const[userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <div>
        <Greeting isUserLoggedIn = {userLoggedIn}/>
        <button onClick={() => 
        setUserLoggedIn(!userLoggedIn)}>
        login</button>

    </div>
  );
};
export default Ter