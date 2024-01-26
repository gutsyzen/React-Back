import React,{userState} from 'react'

const Greeting =(isUserLoggedIn)=>{
    <div>
        {
            isUserLoggedIn? (
                <h1>Welcome</h1>
            ):(
                <h1>Login Again</h1>
            )
        }
    </div>
}
const Ter = ()=>{
    const [userLoggedIn,setUserLoggedIn]=userState(flase);
    return(
        <div>
            <Greeting isUserLoggedIn = {userLoggedIn}/>
            <button onClick={()=>
            setUserLoggedIn(!userState)}>Login</button>
        </div>
    );
};
