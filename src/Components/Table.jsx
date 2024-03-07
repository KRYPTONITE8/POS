import React from 'react'

function Table(props) {
  return (
    <div className='bg-grey inline-table border-2 border-white '> <h1 className='text-xl italic'> Table {props.number}</h1> <br /> <h1 className=' text text-3xl'> Bill amount : ${props.amount}</h1></div>




    
  )
}

export default Table