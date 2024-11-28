"use client"
import React, {useEffect, useState} from "react"
import RecipientHeader from "./RecipientHeader"
import {ConversationProps} from "@/app/data"
import MessageItem from "./MessageItem"
import {getMessagesByConversationId, MessageProps} from "@/app/data/messages"
import SendMessageFooter from "./SendMessageFooter"

interface MessageBoxProps {
  conversation?: ConversationProps
}

const MessagesBox = ({conversation}: MessageBoxProps) => {
  const [isloading, setIsloading] = useState<boolean>(true)
  const [messages, setMessages] = useState<MessageProps[]>()

  useEffect(() => {
    const results = getMessagesByConversationId(conversation?.id as number)
    if (results.length > 0) {
      setMessages(results)
      setIsloading(false)
    }
  }, [conversation?.id])

  if (isloading) {
    return (
      <div className='w-full h-screen relative flex items-center justify-center'>
        <div className='w-16 h-16 border-4 border-t-4 border-blue-400 rounded-full animate-spin'></div>
      </div>
    )
  }
  return (
    <div className='w-full h-full relative'>
      <RecipientHeader
        recipientName={conversation?.recipientName as string}
        recipientImage={conversation?.recipientImage as string}
        recipientDescription='Available until evening'
      />
      <div className='flex-1  bg-white h-[78vh] lg:h-[68vh]    2xl:h-[70vh] overflow-y-scroll flex flex-col gap-4 overflow-x-hidden p-4 w-full hide-scroll '>
        {messages && messages.map((message, idx) => <MessageItem key={idx} conversation={conversation as ConversationProps} message={message} />)}
      </div>
      <SendMessageFooter />
    </div>
  )
}

export default MessagesBox
