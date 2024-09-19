// src/components/Thirdpage.jsx
import React from 'react';
import FestivalCrd from './festivalCrd';


function Thirdpage() {
  // const redirects = [
  //   '/ganesh',
  //   '/kullu',
  //   '/thai',
  //   '/dussehra'
  // ];
  const festimages = [
    'https://www.india-tours.com/blog/wp-content/uploads/2021/05/ganesh-chaturthi-mumbai-1.jpg',
    'https://im.hunt.in/cg/Kullu/City-Guide/kullu-dussehra1.jpg',
    'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.dailymirror.lk/assets/uploads/image_7053c67e88.jpg',
    'https://static.india.com/wp-content/uploads/2015/10/kullu.jpg'
  ];

  return (
    <div className='flex justify-center mt-12'>
      <div className='grid grid-cols-3 justify-items-center gap-12 mx-auto'>
        <FestivalCrd imgcard={festimages[0]} title="GANESH CHATURTHI"/>
        <FestivalCrd imgcard={festimages[1]} title="KULLI DUSSHERA"/>
        <FestivalCrd imgcard={festimages[2]} title="THAI PONGAL"/>
        <div className='col-span-3'>
          <FestivalCrd imgcard={festimages[3]} title="DUSSHERA"/>
        </div>
        
        
      </div>
    </div>
  );
}

export default Thirdpage;
