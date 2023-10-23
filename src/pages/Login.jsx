import React, {useContext} from 'react';
import MyInput from "../Components/UI/input/MyInput";
import MyButton from "../Components/UI/button/MyButton";
import {AuthContext} from "../context";
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const submit = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true');
        navigate("/posts");
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={submit}>
                <MyInput type="text" placeholder = "enter login"/>
                <MyInput type="password" placeholder = "enter password"/>
                <MyButton> Login </MyButton>
            </form>

        </div>
    );
};

export default Login;