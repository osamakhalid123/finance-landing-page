import React from 'react'
import facebook from '../assets/facebook.png'
import githup from '../assets/githup.jpg'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

function Footer() {
  return (
    <div className='grid justify-center mx-auto py-[60px] px-[30px] md:grid-cols-5'>

        <div className='justify-center mx-auto my-[10px]'>
            <h1 className=' font-bold text-green-400 mb-3 uppercase'>React.</h1>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perferendis, consectetur, id maiores a nostrum necessitatibus repellendus officiis minus deleniti et laboriosam dolore. Minima quam quasi laborum quaerat nemo inventore!</p>
            {/* <div className='flex flex-row'>
                <a className='text-white bg-transparent' href="https://www.linkedin.com/in/osama-khalid-86010914b/"> <img className='text-white bg-transparent' src={facebook} alt="facebook" /></a>
                <a href="https://www.linkedin.com/in/osama-khalid-86010914b/"> <img src={githup} alt="githup" /></a>
                <a href="https://www.linkedin.com/in/osama-khalid-86010914b/"> <img src={instagram} alt="instagram" /></a>
                <a href="https://www.linkedin.com/in/osama-khalid-86010914b/"> <img src={twitter} alt="twitter" /></a>

            </div> */}
        </div>
        <div className='text-white mx-auto flex flex-col my-[10px] text-center' >
            <a className='p-2' href="https://www.linkedin.com/in/osamakhaled797/">Solutions</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Analytyics</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Solutions</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Marketing</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Insights</a>
        </div>
        <div className='text-white mx-auto flex flex-col my-[10px] text-center' >
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Support</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Pricing</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Documentation</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Quides</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">API Status</a>
        </div>

        <div className='text-white mx-auto flex flex-col my-[10px] text-center' >
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Company</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">About</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Blog</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khaled-86010914b/">Jobes</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Press</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Partners</a>

        </div>

        <div className='text-white mx-auto flex flex-col my-[10px] text-center' >
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Legal</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Claim</a>
            <a className='p-2' href="https://www.linkedin.com/in/osama-khalid-86010914b/">Privacy</a>
            <a className='p-2' href="www.linkedin.com/in/osamakhaled797">Terms</a>
        </div>

    </div>
  )
}

export default Footer