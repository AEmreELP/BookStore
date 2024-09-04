import React from 'react'
import { BsArrowLeft } from "react-icons/bs"; // Correct icon name is BsArrowLeft
import { Link } from 'react-router-dom'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
      <Link to={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
        <BsArrowLeft className="text-2xl"/>
      </Link>
    </div>
  )
}

export default BackButton
