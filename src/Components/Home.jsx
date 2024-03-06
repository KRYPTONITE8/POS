import React from 'react'
import Table from './Table'
function Home() {
  return (
    <>

    <table className=' flex bg-red '>
      <tr>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="1"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="2"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="3"/></td>
      </tr>
      <tr>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="4"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="5"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="6"/></td>
      </tr>
      <tr>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="7"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="8"/></td>
      <td className='bg-black inline-block p-4  text-white border-4 border-white ' ><Table number ="9"/></td>
      </tr>
    </table>
    {/* <div className=' bg-slate-600 flex-auto'>
       <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    <div className='bg-black text-white inline-block'><Table/> </div>
    </div> */}
    

    </>
    


  )
}

export default Home