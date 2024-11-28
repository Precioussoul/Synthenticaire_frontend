"use client"

import {ConversationProps} from "@/app/data"

import React, {createContext, useContext, useState} from "react"

interface AppContextProps {
  conversation: ConversationProps | null
  setConversation: React.Dispatch<React.SetStateAction<ConversationProps | null>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [conversation, setConversation] = useState<ConversationProps | null>(null)
  return <AppContext.Provider value={{conversation, setConversation}}>{children}</AppContext.Provider>
}

export default AppContextProvider

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider")
  }
  return context
}
