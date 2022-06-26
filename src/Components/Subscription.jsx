import React from 'react'
import double from '../assets/double.png'
import single from '../assets/single.png'
import triple from '../assets/triple.png'

function Subscription() {
  return (
    <div className='bg-white justify-center  py-[80px]  grid md:grid-cols-3'>
        <div className=' mx-auto p-8 drop-shadow-xl mb-6 hover:scale-105 flex justify-center  text-center flex-col bg-white'>
            <img className='my-[8px] w-[50px] mx-auto' src={single} alt="single" />
            <p className='my-[8px] font-bold'>Single User</p>
            <p className='my-[8px] font-bold'>$149</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>500 GB Storage</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>1 User Allowed</p>
            <p className=' my-[8px] border-b-[1px] border-gray-300'>Send up to 2GB</p>
            <button className=' font-bold bg-green-400 text-black py-2 px-[50px] border rounded-[5px] my-[8px]'>Start Trial</button>
        </div>
        <div className='md:w-auto p-8 drop-shadow-xl mb-6  mx-auto hover:scale-105 flex justify-center  text-center flex-col bg-white'>
            <img className='my-[8px] w-[50px] mx-auto' src={double} alt="single" />
            <p className='my-[8px] font-bold'>Parnership</p>
            <p className='my-[8px] font-bold'>$199</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>1 TB Storage</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>3 User Allowed</p>
            <p className=' my-[8px] border-b-[1px] border-gray-300'>Send up to 10 GB</p>
            <button className=' font-bold bg-green-400 text-black py-2 px-[50px] border rounded-[5px] my-[8px]'>Start Trial</button>
        </div>

        <div className='md:w-auto p-8 drop-shadow-xl mb-6 mx-auto hover:scale-105 flex justify-center  text-center flex-col bg-white'>
            <img className='my-[8px] w-[50px] mx-auto' src={triple} alt="single" />
            <p className='my-[8px] font-bold'>Group Account</p>
            <p className='my-[8px] font-bold'>$299</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>5 TB Storage</p>
            <p className='my-[8px] border-b-[1px] border-gray-300'>10 User Allowed</p>
            <p className=' my-[8px] border-b-[1px] border-gray-300'>Send up to 20 GB</p>
            <button className=' font-bold bg-green-400 text-black py-2 px-[50px] border rounded-[5px] my-[8px]'>Start Trial</button>
        </div>
        
        </div>
  )
}

export default Subscription