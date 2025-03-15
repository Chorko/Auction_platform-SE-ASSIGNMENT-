"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, Clock, Filter } from "lucide-react"

export default function BidHistory() {
  const [bids, setBids] = useState([
    {
      id: 1,
      user: {
        name: "John D.",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop",
        initials: "JD",
        isPremium: true,
      },
      amount: 4250,
      time: "Just now",
      isYou: true,
    },
    {
      id: 2,
      user: {
        name: "Sarah M.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        initials: "SM",
        isPremium: false,
      },
      amount: 4150,
      time: "1 min ago",
      isYou: false,
    },
    {
      id: 3,
      user: {
        name: "Robert K.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        initials: "RK",
        isPremium: true,
      },
      amount: 4050,
      time: "3 mins ago",
      isYou: false,
    },
    {
      id: 4,
      user: {
        name: "John D.",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop",
        initials: "JD",
        isPremium: true,
      },
      amount: 3950,
      time: "5 mins ago",
      isYou: true,
    },
    {
      id: 5,
      user: {
        name: "Emma L.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        initials: "EL",
        isPremium: false,
      },
      amount: 3850,
      time: "8 mins ago",
      isYou: false,
    },
    {
      id: 6,
      user: {
        name: "Michael P.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        initials: "MP",
        isPremium: false,
      },
      amount: 3750,
      time: "12 mins ago",
      isYou: false,
    },
    {
      id: 7,
      user: {
        name: "Robert K.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        initials: "RK",
        isPremium: true,
      },
      amount: 3650,
      time: "15 mins ago",
      isYou: false,
    },
    {
      id: 8,
      user: {
        name: "Sarah M.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
        initials: "SM",
        isPremium: false,
      },
      amount: 3550,
      time: "18 mins ago",
      isYou: false,
    },
  ])

  return (
    <Card className="bg-white border-slate-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-slate-900">Bid History</h3>
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
          >
            <Filter className="h-3.5 w-3.5 mr-2" />
            Filter
          </Button>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
          {bids.map((bid) => (
            <div
              key={bid.id}
              className={`flex items-center p-3 rounded-lg ${
                bid.isYou ? "bg-blue-50 border border-blue-200" : "bg-slate-50"
              }`}
            >
              <Avatar className="h-10 w-10 border border-slate-200">
                <AvatarImage src={bid.user.avatar} />
                <AvatarFallback>{bid.user.initials}</AvatarFallback>
              </Avatar>

              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <span className="font-medium text-slate-900">{bid.user.name}</span>
                  {bid.user.isPremium && (
                    <Badge className="ml-2 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200 text-xs py-0">
                      Premium
                    </Badge>
                  )}
                  {bid.isYou && (
                    <Badge className="ml-2 bg-green-100 text-green-600 hover:bg-green-200 border-green-200 text-xs py-0">
                      You
                    </Badge>
                  )}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {bid.time}
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-slate-900">${bid.amount.toLocaleString()}</div>
                <div className="text-xs text-green-600 flex items-center justify-end">
                  <ArrowUp className="h-3 w-3 mr-0.5" />
                  $100
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

