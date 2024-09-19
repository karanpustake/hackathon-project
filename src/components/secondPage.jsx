import React from 'react'
import Destinationcard from './destinationcard'
function SecondPage() {
  const url1 = [
    "https://content.r9cdn.net/rimg/dimg/a9/dd/d6b29241-city-44818-166a7453734.jpg?width=1366&height=768&xhint=1600&yhint=1049&crop=true",
    "https://media1.thrillophilia.com/filestore/vnsqeyap58fduz2gnnv74enhr850_1576477108_1487749794_spiti-valley-key-kibber-1.jpg.webp.jpg?w=400&dpr=2",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIB4hxaIrcPPpPa4Hv0-tJ3ARXeImL8sc4mA&s",
  "https://static01.nyt.com/images/2018/09/23/travel/23Kashmir1/23Kashmir1-superJumbo.jpg"

  ]
  return (
    <div>
      <div className='flex justify-center my-8 '>
    <div className='grid grid-cols-4 gap-12 '>
      <div className=' hover:scale-105 transition duration-300'>

    <Destinationcard  imgcard={url1[0]} title={"Munnar"} description={"Virgin forests, savannah, rolling hills, scenic valleys, numerous streams."} rating={4.8} places={"Kerala"} link={'https://www.thrillophilia.com/cities/munnar/tours'} />
      </div>
      <div className='hover:scale-105 transition duration-300'>

<Destinationcard imgcard={url1[1]} title={"Spiti valley"} description={"Spiti is a religious and cultural center for Buddhists."} rating={4.9} places={"Himachal pradesh"} link={'https://www.thrillophilia.com/tours/spiti-valley-tour-package-from-delhi'} />
  </div>
  <div className='hover:scale-105 transition duration-300'>

    <Destinationcard imgcard={url1[2]} title={"Pondicherry"} description={"Pondicherry makes you fall in love with its colonial structures."} rating={4.5} places={"Union terittory"} link={'https://www.thrillophilia.com/cities/pondicherry/tours'} />
      </div>
      <div className='hover:scale-105 transition duration-300'>

    <Destinationcard imgcard={url1[3]} title={"Gurez valley"} description={"Gurez Valley is blessed with some beautiful rivers and lakes in Kashmir."} rating={4.7} places={"Kashmir"} link={'https://gogulmarg.com/category_details.aspx?ID=30&cn=GUREZ%20VALLEY%20PACKAGE'} />
      </div>
    </div>
    </div></div>
  )
}

export default SecondPage