import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Bottom() {
  return (
    <div >
        <div>
            <div className='h-auto mt-12  w-auto bg-orange-400 font-barlow flex items-center justify-between '>
                <div className='mx-12 flex items-center gap-6 py-3 '>
                    <div>

                    <h1 className='text-5xl font-bold'>TRIAL QUEST</h1>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='mr-12 flex gap-4'>
                    <a href="https://www.instagram.com/pvtt.ompandey/" target='_blank'><FaInstagram  className='text-3xl'/>  </a>
                    <a href="mailto:'dypiu@gmail.com" className='text-3xl'><MdEmail />  </a>               

                </div>
            </div>

        </div>
        
        </div>
  )
}

export default Bottom