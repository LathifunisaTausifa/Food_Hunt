import React from 'react'
import { categories } from '../Data/data'

const Category = () => {
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 p-2 font-bold text-4xl text-center'>Top Rated Menu</h1>
            {/* Category */}
            <div className='grid grid-cols-2 md:grid-cols-4 pt-4 gap-6 py-6'>
                {categories.map((item, index) => (
                    <div key={index} className='bg-gray-100 flex justify-between items-center p-4 rounded-lg'>
                        <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                        <img className='w-20' src={item.image} alt={item.name} />
                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <p></p>

            <p className='text-muted text-gray-800 italic align-middle'> - Done by <email>tausifakhanam212@gmail.com</email></p>
            </div>
        </div>
    )
}

export default Category
