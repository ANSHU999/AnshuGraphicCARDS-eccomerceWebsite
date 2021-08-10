import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './../actions/userActions';
 import { registerUserReducer } from './../reducers/userReducer';
 import Loading from '../components/Loading';
 import Success from '../components/Success';
 import Error from '../components/Error';

export default function Registerscreen() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const registerstate = useSelector(state=>state.registerUserReducer)
    const {error , loading , success} = registerstate

    const dispatch = useDispatch()

    function register() {
        if (password != cpassword) {
            alert("passwords not match")
        }

        else {
            const user = {
                name,
                email,
                password

            }
            console.log(user);
            dispatch(registerUser(user))

        }
    }
    return (
        <div>

            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">

                    {loading  && (<Loading/>)}
                    {success && (<Success success = 'User Registered Successfully'/>)}
                    {error && (<Error error = 'email already registered '/>)}

                    <h2 style={{ fontsize: '35px' }}>Register</h2>
                    <div className="app">

                        <input required type="text" placeholder="name" className="form-control" value={name} required onChange={(e) => { setname(e.target.value) }} />
                        <input required type="text" placeholder="email" className="form-control" value={email} required onChange={(e) => { setemail(e.target.value) }} />
                        <input required type="text" placeholder="password" className="form-control" value={password} required onChange={(e) => { setpassword(e.target.value) }} />
                        <input required type="text" placeholder="confirm password" className="form-control" value={cpassword} required onChange={(e) => { setcpassword(e.target.value) }} />
                        <button onClick={register} className="btn mt-3 mb-3" >Register</button>
                        <br/>
                        <a style={{color:'black'}} href="/login">click here to Login </a>

                    </div>

                </div>

            </div>

        </div>
    )
}
