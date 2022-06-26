import React from 'react'

function Tips() {
  return (
    <div className='grid h-auto text-center md:text-left items-center	 justify-center mx-auto py-[100px] mb-[20px] md:grid-cols-2'>
        <div className='mx-auto p-[10px] mb-[60px] md:my-0 '>
        <h1 className='text-white font-bold text-3xl'>Want tips & ticks to optimize your flow?</h1>
        <p className='text-white'>sign up our newsletter and stay up to date.</p>
        </div>
        <div className='mx-auto' >
            <input className='py-2 px-5 rounded-lg mr-4 mb-3' type="text" placeholder='Enter your mail' />
            <button className='bg-green-400 px-5  py-2 rounded-lg text-black mt-2 font-bold cursor-pointer'>Notify me</button>
            <p className='text-white'>We care about the protection of your data. Read our <br /> <a className='text-green-500 underline' href="ww"> Privacy Policy.</a></p>
        </div>
    </div>
  )
}

export default Tips