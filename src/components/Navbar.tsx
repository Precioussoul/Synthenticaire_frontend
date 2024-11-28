import React from "react"

const Navbar = () => {
  return (
    <nav className='p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-black text-xl font-bold'>LOGO</div>
        <div className='hidden md:flex space-x-4'>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            Home
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            About
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            Services
          </a>
          <a href='#' className='text-gray-700 hover:text-blue-500'>
            Contact
          </a>
        </div>
        <div className='md:hidden'>
          <button className='text-gray-300 hover:text-blue-500 focus:outline-none'>{/* SVG */}</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
