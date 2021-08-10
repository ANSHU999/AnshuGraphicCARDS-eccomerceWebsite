import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading';
import Error from '../components/Error';
import { deliverOrder, getAllOrders } from './../actions/orderActions';
import { getAllOrdersReducer } from './../reducers/orderReducer';
import { deliverorder } from '../actions/GraphicsActions';

export default function Orderlist() {
    const dispatch = useDispatch()

    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    return (

        <div>
            {loading && (<Loading />)}
            {error && (<Error error=' something went wrong ' />)}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>Order ID</th>
                        <th>Email</th>
                        <th>User ID</th>
                        <th>Amount </th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {orders && orders.map(order => {
                        return <tr>
                            <td>{order._id}</td>
                            <td>{order.email}</td>
                            <td>{order.userid}</td>
                            <td>{order.orderAmount}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>

                            <td>
                                {order.isDelivered ? (<h1>Delivered</h1>) : (<button className='btn' onClick={()=>{dispatch(deliverOrder(order._id))}}>Deliver</button>)}
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>


            <h1>Order list </h1>
        </div>
    )
}
