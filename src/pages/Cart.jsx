import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice';
import CartComponent from '../components/cart/CartComponent';

const Cart = () => {
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount} = useSelector( state => state.carts)

    console.log(carts, totalAmount, itemCount);
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
  return (
    <div>
        {
            carts.length > 0 ? 
            <div>
                {
                    carts.map((cart, index) => (
                        <CartComponent key={index} cart = {cart} />
                    ))
                }
                <p className='text-xl  text-right'>Total: <span className='text-2xl font-bold'>{totalAmount} Azn</span></p>
            </div>   
            :
            <p className='text-center my-[200px] text-3xl font-bold'>Cart empty....</p>
        }
    </div>
  )
}

export default Cart