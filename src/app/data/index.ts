export interface ConversationProps {
  id?: number
  recipientImage: string
  recipientName: string
  latestMessage: string
  time: string
  unread: boolean
}

export const conversations: ConversationProps[] = [
  {
    id: 1,
    recipientImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    recipientName: "John Doe",
    latestMessage: "Hey, how are you?",
    time: "10:30 AM",
    unread: true,
  },
  {
    id: 2,
    recipientImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    recipientName: "Jane Smith",
    latestMessage: "Let's catch up later.",
    time: "9:15 AM",
    unread: false,
  },
  {
    id: 3,
    recipientImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    recipientName: "Alice Johnson",
    latestMessage: "Can you send me the report?",
    time: "Yesterday",
    unread: true,
  },
  {
    id: 4,
    recipientImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    recipientName: "Bob Brown",
    latestMessage: "Thank you!",
    time: "2 days ago",
    unread: false,
  },
  {
    id: 5,
    recipientImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    recipientName: "Charlie Davis",
    latestMessage: "See you soon.",
    time: "Last week",
    unread: true,
  },
  {
    id: 6,
    recipientImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    recipientName: "David Evans",
    latestMessage: "I'll be there at 5.",
    time: "3 days ago",
    unread: false,
  },
  {
    id: 7,
    recipientImage: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    recipientName: "Eva Green",
    latestMessage: "Can we reschedule?",
    time: "4 days ago",
    unread: true,
  },
  {
    id: 8,
    recipientImage: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    recipientName: "Frank Harris",
    latestMessage: "Got it, thanks!",
    time: "5 days ago",
    unread: false,
  },
  {
    id: 9,
    recipientImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    recipientName: "Grace Lee",
    latestMessage: "I'll call you later.",
    time: "6 days ago",
    unread: true,
  },
  {
    id: 10,
    recipientImage: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    recipientName: "Henry Miller",
    latestMessage: "See you tomorrow.",
    time: "Last month",
    unread: false,
  },
]
