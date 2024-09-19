import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

function Destinationcard({imgcard, title, description, rating, places, link}) {
  
  return (
    <div>    <div >
       <a href={`${link}`} target='_blank'>
    <div className={`w-64 h-[62vh] bg-slate-100 drop-shadow-xl overflow-hidden m-3 rounded-md font-Exo `}>
    <div className=''>
        <div className=''>
          <img src={`${imgcard}`} alt="" srcset="" className='h-44 w-auto'/>
        </div>
        <div className='mx-3 my-3 flex-col flex gap-2'>

            <h1 className='text-3xl font-bold text-center'> {title}          </h1> 
            <div className='flex items-center'>
            <div className=' gap-1 w-auto flex rounded-md items-center text-xl'>
            <MdOutlineStarPurple500 className='text-2xl  text-red-400' />
            <p className='description text-orange-900' > {rating}</p>
            </div>
            </div>
            
            <p className='description text-xl' >{description}</p>
            <p className='places text-lg text-amber-900'>{places}</p>
            <div className='bg-slate-300 p-3 rounded-md hover:bg-slate-400 cursor-pointer transition duration-300 text-center'>

            <a  href={`${link}`} target='_blank'>Explore</a>
            </div>
        </div>

    </div>
</div>
</a>
</div ></div>
  )
}

export default Destinationcard