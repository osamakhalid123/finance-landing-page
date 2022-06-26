import React from 'react'
import laptop from '../assets/laptop.jpg'

function Managr() {
  return (
    <div className='bg-white  justify-center  mx-auto   py-[90px] grid  md:grid-cols-2'>
      <img className=' w-[70%] h-[80%] mx-auto ' src={laptop} alt="laptop" />
      <div className='mt-3 mx-3 text-center md:text-left'>
        <p  className='text-green-400 py-2 font-bold uppercase '>Data analytics dashboard</p>
        <h1 className='md:text-4xl sm:text-3xl  text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
        <p py-4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, voluptates, nulla, sequi asperiores laudantium natus in eligendi eveniet ea aperiam molestias accusamus aliquid veniam harum ullam repellendus aliquam? Distinctio, atque?</p>
        <button className='text-green-400 px-7 text-xl py-2 rounded-lg bg-black mt-2 font-bold'> Get Started</button>
      </div>
    </div>
  )
}

export default Managr