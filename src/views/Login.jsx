import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { encrypt } from "../utils/encrypt-decrypt";
import toast, { Toaster } from 'react-hot-toast';
import UserContext from "../context/UserContext";
import Alert from "../components/alerts/Alert";
import MaxMinLength from "../components/alerts/MaxMinLength";

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const userState = useContext(UserContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { user, password } = data;
      
        data.id = 1;
        userState.setUserLogin(encrypt(JSON.stringify(data)));
        navigate('/dashboard');
    };

    const handleClick = () =>{ navigate('/register')};

    return (
        <div className="container-login">
            <div><Toaster/></div>
            <h2>LOGIN</h2>
            <p>logo</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>User</label>
                    <input type="text" {...register("user", { required: true})} autoFocus/>
                    {errors.user?.type === "required" && <Alert />}
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" {...register("password", { required: true, minLength:8, maxLength:12 })} autoComplete="on"/>
                    {errors.password?.type === "required" && <Alert />}
                    {errors.password?.type === "minLength" && <MaxMinLength length='Min' number={8}/>}
                    {errors.password?.type === "maxLength" && <MaxMinLength length='Max' number={12}/>}
                </div>
                <div>
                    <button type="submit">Enter</button>
                    <button type="reset" onClick={handleClick}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
