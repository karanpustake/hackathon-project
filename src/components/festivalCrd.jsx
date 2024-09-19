
import React, { useState } from 'react'

import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";


function FestivalCrd({title, imgcard,}) {
    const [isHovered, setIsHovered] = useState()
   return (
     <div >
        <a href={``} target='_blank'>
 
        
 
       <div className= 'hover:bg-orange-400 transition duration-200 bg-red-50 w-[50vh] h- rounded-lg drop-shadow-xl m'>
         <div >
           <div className="text-3xl font-Outfit  ml-3  font-light text-center pt-3"><h1>{title}</h1></div>
           <div className='p-3'>
 
            <img className='flex w-full rounded-lg h-52 ' src={`${imgcard}`} alt="" srcset="" />
           </div>
           <hr className='border-gray-800 mx-3 border-[1px]'/>  
           <div className='explore cursor-pointer mt-2 bg-red-50 p-4 transition duration-200 hover:bg-orange-200 flex items-center gap-3 rounded-b-lg' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
             <button className=' text-lime-900 text-2xl' target='_blank'>Explore</button>
             {isHovered ?(
               <MdArrowOutward /> 
               
             ) : (
               <MdArrowForward /> 
 
             )}
           
 
           </div>
         </div>
         
         </div>   
         </a> 
 </div>
   )
 }
 
 export default FestivalCrd;