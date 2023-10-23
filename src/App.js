import React, {useState,useEffect} from 'react';
import Router from "./Components/Router";
import {AuthContext} from "./context";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    const [isAuth,setIsAuth] = useState(false);

    useEffect(() =>{
        if(localStorage.getItem('auth')){
            setIsAuth(true);
        }
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <Router />
        </AuthContext.Provider>
  );
}

export default App;
