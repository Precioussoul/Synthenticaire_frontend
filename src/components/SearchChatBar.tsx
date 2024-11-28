import React from "react"

const SearchChatBar = () => {
  return (
    <div className='bg-white p-3 px-4 rounded-3xl w-full overflow-hidden'>
      <input
        type='text'
        placeholder='Search...'
        className='w-full border-none bg-transparent outline-none h-[45px] placeholder:text-gray-700 font-medium px-4'
      />
    </div>
  )
}

export default SearchChatBar
