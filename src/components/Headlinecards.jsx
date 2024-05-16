import React from 'react'

const Headlinecards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card1 */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
                    <p className='font-bold text-center text-2xl pt-2 px-1'>Sun's out, BOGO'S out</p>
                    <p className='px-2  py-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 bottom-4 absolute'>Sold Out</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </div>

            {/* card2 */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
                    <p className='font-bold text-center text-2xl pt-2 px-1'>Sun's out, BOGO'S out</p>
                    <p className='px-2 py-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 bottom-4 absolute'>Sold Out</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src='https://images.pexels.com/photos/5718071/pexels-photo-5718071.jpeg?auto=compress&cs=tinysrgb&w=400' />
            </div>


            {/* card 3 */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute text-white w-full h-full bg-black/50 rounded-xl'>
                    <p className='font-bold text-center text-2xl pt-2 px-1'>Sun's out, BOGO'S out</p>
                    <p className='px-2 py-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 bottom-4 absolute'>Sold Out</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover' src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </div>
        </div>
    )
};


export default Headlinecards
