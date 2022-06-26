import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React,{useState} from 'react'

function Nav() {
  const[nav,setnav]=useState(false);

 const handelnav= ()=>{
  setnav(!nav);

  }
  return (
    <>
    <div className='flex justify-around mx-auto mt-3'>
       <h1 className=" font-bold text-4xl text-green-400">Logo.</h1>
       <ul  className='text-white hidden md:flex'>
        <li className='p-2 cursor-pointer ' >Home</li>
        <li className='p-2 cursor-pointer'>Company</li>
        <li className='p-2 cursor-pointer'>About</li>
        <li className='p-2 cursor-pointer'>Resourses</li>
        <li className=' cursor-pointer p-2 bg-white text-black rounded-md font-semibold'>Get Started</li>
       </ul>
       {nav?
       <div onClick={handelnav}>
       <AiOutlineMenu  className="p-2 text-white text-5xl cursor-pointer md:hidden"/>
       </div>
       :<></>}

    </div>
    {!nav?
    <div  className=' z-[3]  fixed left-0 top-0 w-[70%] h-full bg-gray-900  md:hidden '>
    <AiOutlineClose onClick={handelnav} className=" relative float-right m-2 text-white text-3xl cursor-pointer md:hidden"/>
    <h1 className=" m-4 font-bold text-5xl text-green-400">Logo.</h1>
       <ul  className=' text-white pt-5 pl-4 text-2xl '>
        <li className='pl-2 cursor-pointer mb-4 border-b border-gray-600' >Home</li>
        <li className='p-2 cursor-pointer mb-4 border-b border-gray-600'>Company</li>
        <li className='p-2 cursor-pointer mb-4 border-b border-gray-600'>About</li>
        <li className='p-2 cursor-pointer mb-4 border-b border-gray-600'>Resourses</li>
       </ul>
       </div>:<></>}
    </>
  )
}

export default Nav