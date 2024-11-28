import React, {useEffect, useState} from "react"
import RecipientHeader from "./RecipientHeader"
import {ConversationProps} from "@/app/data"
import MessageItem from "./MessageItem"
import {getMessagesByConversationId, MessageProps} from "@/app/data/messages"

interface MessageBoxProps {
  conversation?: ConversationProps
}

const MessagesBox = ({conversation}: MessageBoxProps) => {
  const [messages, setMessages] = useState<MessageProps[]>()

  useEffect(() => {
    const results = getMessagesByConversationId(conversation?.id as number)

    setMessages(results)
  }, [conversation?.id])
  return (
    <div className='w-full h-full'>
      <RecipientHeader
        recipientName={conversation?.recipientName as string}
        recipientImage={conversation?.recipientImage as string}
        recipientDescription='Available until evening'
      />
      <div className='flex-1 bg-white h-[75vh] overflow-y-scroll flex flex-col gap-4 overflow-x-hidden p-4 w-full'>
        {messages && messages.map((message, idx) => <MessageItem key={idx} conversation={conversation as ConversationProps} message={message} />)}
      </div>
    </div>
  )
}

export default MessagesBox
