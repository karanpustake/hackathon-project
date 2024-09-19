import React from 'react'

import { useState, useEffect } from 'react';
function Firstpage() {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div> <div  className="bg-[url('/images/spiti.jpg')]  bg-cover bg-center min-h-screen flex items-center justify-center">
    <div className='text-center gap-y-6 flex-col flex'>
      <h1 className={`text-white text-6xl font-Arimo font-semibold shadow-black drop-shadow-xl typing-animation ${isTyping ? '' : 'opacity-100'}`}>Explore India</h1>
      <h1 className='text-white text-6xl font-Outfit font-lightbold drop-shadow-xl'>Enjoy luxurious adventures with us !</h1>
    </div>
  </div>
  </div>
  )
}

export default Firstpage