"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Smile, Send } from "lucide-react"

export default function LiveChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: {
        name: "Sarah M.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        initials: "SM",
        isPremium: false,
      },
      message: "Beautiful watch! I've been looking for this model for years.",
      time: "2 mins ago",
    },
    {
      id: 2,
      user: {
        name: "Robert K.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        initials: "RK",
        isPremium: true,
      },
      message: "The condition looks excellent for its age. Original box and papers too!",
      time: "1 min ago",
    },
    {
      id: 3,
      user: {
        name: "Emma L.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        initials: "EL",
        isPremium: false,
      },
      message: "Does anyone know if the service history is complete?",
      time: "Just now",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        user: {
          name: "John D.",
          avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop",
          initials: "JD",
          isPremium: true,
        },
        message: newMessage,
        time: "Just now",
      },
    ])

    setNewMessage("")
  }

  return (
    <Card className="bg-white border-slate-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-slate-900">Live Chat</h3>
            <p className="text-xs text-slate-500">24 participants in chat</p>
          </div>
          <Badge className="bg-green-600 text-white">Live</Badge>
        </div>

        <div className="space-y-4 h-[350px] overflow-y-auto pr-2 mb-4 scrollbar-thin">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3">
              <Avatar className="h-8 w-8 border border-slate-200">
                <AvatarImage src={msg.user.avatar} />
                <AvatarFallback>{msg.user.initials}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-slate-900">{msg.user.name}</span>
                  {msg.user.isPremium && (
                    <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200 text-xs py-0">
                      Premium
                    </Badge>
                  )}
                  <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
                <p className="text-slate-600 mt-1">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800">
            <Smile className="h-5 w-5" />
          </Button>
          <Input
            placeholder="Type your message..."
            className="flex-1 bg-white border-slate-200 text-slate-800 focus:border-blue-500"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

