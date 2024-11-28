import React from "react"

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-xl font-bold'>LOGO</h2>
        </div>
        <div className='flex space-x-4'>
          <a href='#' className='hover:text-blue-500'>
            Privacy Policy
          </a>
          <a href='#' className='hover:text-blue-500'>
            Terms of Service
          </a>
          <a href='#' className='hover:text-blue-500'>
            Contact
          </a>
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className='text-sm'>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
