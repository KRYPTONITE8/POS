import React from 'react'
import Table from './Table'
import { NavLink } from 'react-router-dom'
import TableDetails from './TableDetails'
import Header from './Header'
function Home() {
  return (
    <>
    <table className='bg-red flex '>
      <tr>
      <td className='bg-black inline-block p-0  text-white border-4 border-white  ' ><div style={{ margin: "10px" }}>
                        <NavLink
                            to="/TableDetails"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                          <Table number ="1" amount ="x"/>
                        </NavLink>
                        </div>
                        </td>
      <td className='bg-black inline-block p-0  text-white border-4 border-inherit ' ><Table number ="2" amount ="x"/></td>
      <td className='bg-black inline-block p-0  text-white border-4 border-inherit ' ><Table number ="3" amount ="x"/></td>
      </tr>
      <tr>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="4" amount ="x"/></td>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="5" amount ="x"/></td>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="6" amount ="x"/></td>
      </tr>
      <tr>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="7" amount ="x"/></td>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="8" amount ="x"/></td>
      <td className='bg-black inline-block p-0 text-white border-4 border-inherit ' ><Table number ="9" amount ="x"/></td>
      </tr>
    </table>

    

    </>
    


  )
}

export default Home