import React from 'react'
import {useDispatch} from "react-redux";
import { login , logout } from "../features/user"

function Login (){
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=> dispatch(login({name: "Delio Manga", age: 40, email: "Ashrina" }))}> Login </button>
            <button onClick={()=> dispatch(logout())}> Log me Out </button>
        </div>
    )
}

export default Login
