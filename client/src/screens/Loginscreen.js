import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Loginscreen() {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , success , error} = loginstate

    const dispatch = useDispatch()

    useEffect(()=>{
 
        if(localStorage.getItem('currentUser'))
        {
            window.location.href='/'
        }
 
    },[])

    function login()
    {
        const user = {email,password}
        dispatch(loginUser(user))
    }
    return (
        <div>

        <div className="row justify-content-center mt-5">
            <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">

                {loading && (<Loading/>)}
                {success && (<Success success= "Login Successfully"/>)}
                {error && (<Error error = "Invalid Credentials"/>)}
             

                <h2 style={{ fontsize: '35px' }}>login</h2>
                <div className="app">

                    <input required type="text" placeholder="email" className="form-control" value={email} required onChange={(e) => { setemail(e.target.value) }} />
                    <input required type="text" placeholder="password" className="form-control" value={password} required onChange={(e) => { setpassword(e.target.value) }} />
                    <button onClick={login} className="btn mt-3 mb-3" >login</button>
                    <br/>
                    <a style={{color:'black'}} href="/register" className="m-2">click here to Register</a>

                </div>

            </div>

        </div>

    </div>
    )
}
