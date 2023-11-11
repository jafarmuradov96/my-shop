import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailSingleProduct = ({ productDetail }) => {
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();
    const decrement = () => {
        if(quantity > 0)
        setQuantity((quantity) => quantity - 1)
    }
    const increment = () => {
        if(quantity < productDetail?.rating.count)
        setQuantity((quantity) => quantity + 1)
    }

    const addToBasket = () => {
        dispatch(addToCart({id: productDetail?.id, image: productDetail?.image, title: productDetail?.title, price: productDetail?.price, quantity: productDetail?.quantity }))
    }

  return (
    <div className='my-20 flex gap-2'>
        <div className='w-2/4'>
            <img className='w-full h-[400px] object-contain' src= {productDetail.image} alt="" />
        </div>
        <div className='w-2/4'>
            <h3 className='text-2xl font-bold my-10'>{productDetail.title}</h3>
            <p className='text-lg my-1'>{productDetail.description}</p>
            <p className=' my-1 text-xl text-orange-600'>Rating:  {productDetail?.rating?.rate}</p>
            <p className='my-1 text-xl text-red-600'>Count: {productDetail?.rating?.count}</p>
            <span className='text-5xl font-medium'>{productDetail.price} <span className='text-xl'>Azn</span></span>
            <div className='flex gap-3'>
                <button onClick={decrement} className='cursor-pointer text-4xl'>-</button>
                <input className=' w-[50px] text-center text-3xl' type="text" value = {quantity} />
                <button onClick={increment} className='cursor-pointer text-4xl'>+</button>
            </div>
            <div>
                <button onClick={addToBasket} className='bg-orange-500 text-white px-4 py-2 rounded-md border my-7'>Add basket</button>
            </div>
        </div>
    </div>
  )
}

export default DetailSingleProduct