import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center font-semibold bg-red-300 p-3'>User:{userid} </div>
  )
}

export default User