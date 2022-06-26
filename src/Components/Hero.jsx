import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='text-white text-2xl  mx-auto text-center mt-[140px]  justify-center mb-4  '>
        <p className='text-green-400 font-bold '>Growing With Data Analytics</p>
        <p className=' font-bold text-3xl'>Grow With data.</p>
        <p className='font-bold mb-3 text-2xl'> Fast, flexibal financing for  <Typed
                    className='text-gray-500'
                    strings={['SaaS','D2C','BTB']}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                /> </p>
                <p className='text-gray-500 font-bold text-2xl '>Monitor your data analytics to increase revenue for BTB, BTC & Saas platforms</p>
                <button className='bg-green-400 px-7 text-xl py-2 rounded-lg text-black mt-2 font-bold'>Get Started</button>
    </div>
  )
}

export default Hero