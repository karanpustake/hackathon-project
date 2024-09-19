import React from 'react'

function Nav() {
  return (
    <div> <div className='flex justify-center p-4 bg-white font-Outfit fixed z-50 w-full'>
    <div className='flex items-center justify-between gap-[100vh] '>
        <div className=' '>
      <h1  className='font-bold text-2xl'>Trial Quest</h1>
      <p>Safar naye Bharat ka !</p>
        </div>
        <div className='flex gap-3 text-xl'>
          <p className=' cursor-pointer hover:text-slate-100 transition duration-300 hover:bg-slate-400 p-2 rounded-md'>Destinations</p>
          <p className=' cursor-pointer hover:text-slate-100 transition duration-300 hover:bg-slate-400 p-2 rounded-md'>Festivals</p>
          <p className=' cursor-pointer hover:text-slate-100 transition duration-300 hover:bg-slate-400 p-2 rounded-md'>Travel</p>
        </div>
    </div>
</div></div>
  )
}

export default Nav