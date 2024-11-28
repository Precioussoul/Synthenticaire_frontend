export interface MessageProps {
  id: number
  conversationId: number
  sender: string
  receiver: string
  message: string
  timestamp: string
}

export const messages: MessageProps[] = [
  {
    id: 1,
    conversationId: 1,
    sender: "John Doe",
    receiver: "You",
    message: "Hey, how are you?",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    conversationId: 1,
    sender: "You",
    receiver: "John Doe",
    message: "I'm good, thanks! How about you?",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    conversationId: 2,
    sender: "Jane Smith",
    receiver: "You",
    message: "Let's catch up later.",
    timestamp: "9:15 AM",
  },
  {
    id: 4,
    conversationId: 3,
    sender: "Alice Johnson",
    receiver: "You",
    message: "Can you send me the report?",
    timestamp: "Yesterday",
  },
  {
    id: 5,
    conversationId: 3,
    sender: "You",
    receiver: "Alice Johnson",
    message: "Sure, I'll send it over.",
    timestamp: "Yesterday",
  },
  {
    id: 6,
    conversationId: 4,
    sender: "Bob Brown",
    receiver: "You",
    message: "Thank you!",
    timestamp: "2 days ago",
  },
  {
    id: 7,
    conversationId: 5,
    sender: "Charlie Davis",
    receiver: "You",
    message: "See you soon.",
    timestamp: "Last week",
  },
  {
    id: 8,
    conversationId: 6,
    sender: "David Evans",
    receiver: "You",
    message: "I'll be there at 5.",
    timestamp: "3 days ago",
  },
  {
    id: 9,
    conversationId: 7,
    sender: "Eva Green",
    receiver: "You",
    message: "Can we reschedule?",
    timestamp: "4 days ago",
  },
  {
    id: 10,
    conversationId: 8,
    sender: "Frank Harris",
    receiver: "You",
    message: "Got it, thanks!",
    timestamp: "5 days ago",
  },
  {
    id: 11,
    conversationId: 9,
    sender: "Grace Lee",
    receiver: "You",
    message: "I'll call you later.",
    timestamp: "6 days ago",
  },
  {
    id: 12,
    conversationId: 10,
    sender: "Henry Miller",
    receiver: "You",
    message: "See you tomorrow.",
    timestamp: "Last month",
  },
]
// Generate additional messages for each conversationId
for (let i = 13; i <= 100; i++) {
  const conversationId = Math.ceil(i / 10)
  messages.push({
    id: i,
    conversationId: conversationId,
    sender: i % 2 === 0 ? "You" : `Sender ${i}`,
    receiver: i % 2 === 0 ? `Receiver ${i}` : "You",
    message: `This is message ${i} for conversation ${conversationId}.`,
    timestamp: `${(i % 12) + 1}:00 AM`,
  })
}

export const getOngoingConversation = (conversationId: number): {sender: string; message: string; timestamp: string}[] => {
  return messages.filter((message) => message.conversationId === conversationId).map(({sender, message, timestamp}) => ({sender, message, timestamp}))
}
export const getMessagesByConversationId = (conversationId: number): MessageProps[] => {
  return messages.filter((message) => message.conversationId === conversationId)
}
