import ConversationItem from "@/components/ConversationItem"
import SearchChatBar from "@/components/SearchChatBar"
import React from "react"
import {conversations} from "./data"

const ChatPage = () => {
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
                />
              ))}
            </div>
          </div>
          <div className='hidden lg:flex lg:flex-[69%]  bg-white rounded-3xl shadow-sm h-full'></div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
