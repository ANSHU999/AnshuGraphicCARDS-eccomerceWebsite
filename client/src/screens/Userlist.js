import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { getAllUsers, deleteUser } from './../actions/userActions';
import { getAllUsersReducer } from './../reducers/userReducer';

export default function Userlist() {
    const dispatch = useDispatch()
    const userstate = useSelector(state=>state.getAllUsersReducer)
    const {loading,error ,users} = userstate 
    useEffect(()=>{
    dispatch(getAllUsers())
    },[])
    return (
        <div>
             {loading && (<Loading />)}
            {error && (<Error error=' something went wrong ' />)}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className ='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>

                    </tr>
                    
                    <tbody>
                        {users && users.map(user=>{
                            return <tr>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><i className='fa fa-trash' onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
                            </tr>
                        })}
                    </tbody>

                </thead>

            </table>
            <h1>user list</h1>
        </div>
    )
}
