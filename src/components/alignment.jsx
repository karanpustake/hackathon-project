import React from 'react'
import Nav from './nav';
import FirstPage from './firstpage';
import SecondPage from './secondPage';
import Thirdpage from './thirdpage';
function Alignment() {
  return (
    <div className=''>
      <div>
    <div className=''>

  <div className=''>
       <Nav/>

  </div>
       <div className=''>

        <FirstPage /> 
       </div>
       <div className='h-screen'>
        <div className='mx-64'>


        <div className=' text-6xl font-Outfit mx-4 my-4 font-semibold '>Where to go </div>
        <div className=' text-4xl font-Outfit mx-14 my-4'>Locations   : </div>
        
        </div>
        <div>

        <SecondPage/>
        </div>
        <h1 className='text-6xl font-Outfit mx-64'>Indian Festivals: </h1>
        <div className=''>

          <Thirdpage />
        </div>
       </div>
       
       
  </div>
  
  </div>
  
  </div>
  )
}

export default Alignment