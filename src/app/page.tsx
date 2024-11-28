"use client"

import ConversationItem from "@/components/ConversationItem"
import SearchChatBar from "@/components/SearchChatBar"
import React, {useState} from "react"
import {ConversationProps, conversations} from "./data"
import MessagesBox from "@/components/MessagesBox"

const ChatPage = () => {
  const [conversation, setConversation] = useState<ConversationProps | null>(null)

  return (
    <div className='w-full h-full'>
      <div className='container mx-auto w-full p-4 h-full'>
        <div className='w-full flex items-start gap-5 h-[90vh] my-4'>
          <div className='flex-[100%] w-full lg:flex-[30%]  flex flex-col gap-5 rounded-2xl shadow-sm h-full'>
            <SearchChatBar />
            <div className='bg-white w-full h-full flex flex-col gap-4 rounded-3xl shadow-sm p-4 overflow-y-scroll hide-scroll'>
              {conversations.map((item, idx) => (
                <ConversationItem
                  key={idx}
                  id={item.id}
                  recipientImage={item.recipientImage}
                  recipientName={item.recipientName}
                  latestMessage={item.latestMessage}
                  unread={item.unread}
                  time={item.time}
                  isSelected={item.id === conversation?.id}
                  onClick={() => {
                    setConversation(item)
                  }}
                />
              ))}
            </div>
          </div>
          <div className='hidden lg:flex lg:flex-[69%]  bg-white rounded-3xl shadow-sm h-full'>
            <MessagesBox conversation={conversation as ConversationProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
