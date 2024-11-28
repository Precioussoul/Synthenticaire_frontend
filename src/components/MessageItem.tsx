import {ConversationProps} from "@/app/data"
import {MessageProps} from "@/app/data/messages"
import Image from "next/image"
import React from "react"

interface MessageItemProps {
  message: MessageProps
  conversation: ConversationProps
}

const MessageItem = ({message, conversation}: MessageItemProps) => {
  return (
    <div className={`flex items-start ${message.sender === "You" ? "justify-end" : "justify-start"} gap-4 w-auto`}>
      {message.receiver === "You" && (
        <div className='flex flex-col gap-2'>
          <div className='w-[50px] h-[50px] bg-red-200 rounded-full relative'>
            <Image src={conversation.recipientImage} alt='recipient image' className='w-full h-full object-cover rounded-full' width={100} height={100} />
            <div className='w-3 h-3 bg-green-600 rounded-full absolute bottom-0 right-0'></div>
          </div>
          <span className='font-semibold text-gray-800 text-sm'>{message.timestamp}</span>
        </div>
      )}
      <div
        className={`min-h-[70px] w-1/2 max-w-2/3 p-4  ${
          message.receiver === "You" ? "bg-primary rounded-r-3xl rounded-bl-3xl" : "bg-secondary rounded-l-3xl rounded-br-3xl"
        } `}
      >
        <p className={`${message.receiver === "You" ? "text-gray-600" : "text-gray-100"}  font-medium`}>{message.message}</p>
      </div>
    </div>
  )
}

export default MessageItem
