import React from 'react'
import { useDispatch } from 'react-redux'
import { remoweFromCart } from '../../redux/cartSlice'

const CartComponent = ({cart}) => {
    const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between'>
        <img className='w-[150px] h-[150px] object-contain'  src={cart?.image} alt="img" />
        <div className='w-[550px]'>
            <h3 className='text-xl'>{cart?.title}</h3>
            <p>{cart?.description}</p>
        </div>
        <p className='text-xl font-bold '>{cart?.price} Azn ({cart?.quantity})</p>
        <button onClick={() => dispatch(remoweFromCart(cart?.id))} className='bg-red-500 py-2 px-4 rounded-md text-white'>Sil</button>
    </div>
  )
}

export default CartComponent