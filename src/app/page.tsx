"use client"

import ConversationItem from "@/components/ConversationItem"
import SearchChatBar from "@/components/SearchChatBar"
import React, {useState} from "react"
import {ConversationProps, conversations} from "./data"
import MessagesBox from "@/components/MessagesBox"
import {useAppContext} from "@/contexts/AppContext"
import Image from "next/image"
import ChatBgImg from "@/assets/image/chat.png"

const ChatPage = () => {
  const {conversation, setConversation} = useAppContext()

  return (
    <div className={`w-full h-full  `}>
      <div className='container mx-auto w-full lg:p-4 h-full'>
        <div className='w-full flex items-start gap-5 h-full lg:h-[90vh] lg:my-4'>
          <div
            className={`${
              conversation ? "hidden lg:flex" : ""
            } flex-[100%] w-full lg:flex-[35%] xl:flex-[30%] px-2  flex flex-col gap-5 rounded-2xl shadow-sm h-full`}
          >
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
          <div
            className={`${
              conversation ? "flex flex-[100%]" : "hidden"
            } lg:flex lg:flex-[64%] xl:flex-[69%]   bg-white rounded-3xl shadow-sm h-full overflow-hidden`}
          >
            {conversation ? (
              <MessagesBox conversation={conversation as ConversationProps} />
            ) : (
              <div className='h-full w-full flex flex-col gap-3 bg-white items-center justify-center'>
                <Image src={ChatBgImg} alt='Chat Welcome' width={100} height={100} />
                <h3 className='text-2xl text-gray-800'>Welcome to the chat </h3>
                <span className='text-sm text-gray-400'>Chat with your peers and get alone with everyone</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatPage
