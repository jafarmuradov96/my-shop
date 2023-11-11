import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='my-5 p-5 bg-gray-100 flex items-center justify-end'>
        <select onChange={(e) => setSort(e.target.value)} className='bg-white py-3 px-5  border' name="" id="">
            <option  value="">Choose</option>
            <option value="decrement">Decrement</option>
            <option value="increment">Increment</option>
        </select>
    </div>
  )
}

export default Sorting
