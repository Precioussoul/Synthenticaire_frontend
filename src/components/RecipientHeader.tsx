"use client"
import {useAppContext} from "@/contexts/AppContext"
import Image from "next/image"
import React from "react"
import {BiArrowBack} from "react-icons/bi"

interface RecipientHeaderProps {
  recipientImage: string
  recipientName: string
  recipientDescription: string
  isOnline?: boolean
}

const RecipientHeader = ({recipientImage, recipientName, recipientDescription, isOnline}: RecipientHeaderProps) => {
  const {setConversation} = useAppContext()
  return (
    <div className='p-4 w-full flex items-center gap-5 border-b border-gray-100 '>
      <div className='lg:hidden' onClick={() => setConversation(null)}>
        <BiArrowBack size={25} color='#000' />
      </div>
      <div className='p-4 w-full flex items-start gap-5   '>
        <div className='w-[50px] h-[50px] bg-red-200 rounded-full relative'>
          <Image src={recipientImage} alt='recipient image' className='w-full h-full object-cover rounded-full' width={100} height={100} />
          <div className='w-3 h-3 bg-green-600 rounded-full absolute bottom-0 right-0'></div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-start gap-2'>
            <h3 className='text-gray-700 font-semibold'>{recipientName}</h3>
            {isOnline ? (
              <div className='min-w-[80px] border border-gray-100 rounded-3xl flex items-center gap-2 w-fit px-4'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-gray-500 font-medium'>Online</span>
              </div>
            ) : (
              <div className='min-w-[80px] border border-gray-100 rounded-3xl flex items-center gap-2 w-fit px-4'>
                <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                <span className='text-sm text-gray-500 font-medium'>Offline</span>
              </div>
            )}
          </div>
          <p className='text-gray-500 text-sm font-medim line-clamp-1'>{recipientDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipientHeader
