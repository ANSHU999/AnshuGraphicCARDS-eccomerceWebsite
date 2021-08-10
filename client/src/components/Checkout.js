import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import { placeOrderReducer } from './../reducers/orderReducer';
import Error from './Error';
import Success from './Success';
import Loading from './Loading';

export default function Checkout({subtotal}) {
    const orderstate = useSelector(((state)=>state.placeOrderReducer))
    const { loading, error, success} = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }
    return ( 
        <div>

            {loading && (<Loading/>)}
            {error && (<Error error = 'something went wrong'/>)}
            {success && (<Success success = 'your order is placed successfully'/>)}
            <StripeCheckout
            amount = {subtotal*100}
            shippingAddress
            token={tokenHandler}
            stripeKey='pk_test_51JAxmlSCFdvDaQIu7Dad30m2iuSXTRedGs2xe7UwdeXVz9DbQdMmdQpZh7eSBOOlqtsF2ikrQADfHzWoJMHFEwJH00F4lwQyPa'
            currency='INR'
            
            >

                

                <button className='btn'>Pay Now</button>





            </StripeCheckout>
        </div>
    )
}
