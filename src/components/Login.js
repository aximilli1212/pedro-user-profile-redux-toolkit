import React from 'react'
import {useDispatch} from "react-redux";
import { login } from "../features/user"

function Login (){
    const dispatch = useDispatch();

    return (
        <div>
            <button> Login </button>
        </div>
    )
}

export default Login
