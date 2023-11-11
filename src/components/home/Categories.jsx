import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categoriesSlice';

const Categories = ({setCategory}) => {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


  return (
    <div className='w-1/6 bg-gray-100 max-h-screen'>
        <h1 className='p-6 font-bold text-2xl'>Categories</h1>
        <ul className=' text-xl '>
           { categories?.map((category,index) => (
                <li onClick={() => setCategory(category)} className=' font-semibold cursor-pointer px-6 py-2 hover:text-orange-500 hover:bg-gray-300' key={index}>{category}</li>
            ))}
        </ul>
    </div>
  )
}

export default Categories