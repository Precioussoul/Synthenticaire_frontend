import {ConversationProps} from "@/app/data"
import Image from "next/image"
import React from "react"

const ConversationItem = ({recipientImage, recipientName, latestMessage, time, unread}: ConversationProps) => {
  return (
    <div className='p-4 flex items-start justify-between border-b border-gray-100'>
      <div className='flex items-start gap-4'>
        <div className='w-[50px] h-[50px] bg-red-200 rounded-full relative'>
          <Image src={recipientImage} alt='recipient image' className='w-full h-full object-cover rounded-full' width={100} height={100} />
          <div className='w-3 h-3 bg-green-600 rounded-full absolute bottom-0 right-0'></div>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-gray-700 font-semibold'>{recipientName}</h3>
          <p className='text-sm text-gray-500'>{latestMessage}</p>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-gray-700 font-semibold text-sm'>{time}</h3>
        {unread && (
          <div className='w-5 h-5 rounded-full bg-orange-300 flex items-center justify-center'>
            <span className='text-white font-semibold text-xs'>1</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ConversationItem
