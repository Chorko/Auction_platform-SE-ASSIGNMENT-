"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Eye, Heart, Users } from "lucide-react"

export default function FeaturedAuctions() {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner (1989)",
      description: "Ref. 116610LN with Box & Papers",
      currentBid: 4250,
      timeLeft: 180, // 3 minutes in seconds
      bidders: 24,
      viewers: 142,
      isWatched: false,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rare First Edition Book Collection",
      description: "Set of 5 first editions in pristine condition",
      currentBid: 1850,
      timeLeft: 3600, // 1 hour in seconds
      bidders: 12,
      viewers: 89,
      isWatched: true,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Signed Michael Jordan Jersey",
      description: "Authenticated Chicago Bulls jersey with COA",
      currentBid: 5200,
      timeLeft: 7200, // 2 hours in seconds
      bidders: 31,
      viewers: 215,
      isWatched: false,
      image: "https://images.unsplash.com/photo-1515459961680-58041359e1ff?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Antique Victorian Writing Desk",
      description: "Mahogany desk with original brass hardware",
      currentBid: 950,
      timeLeft: 10800, // 3 hours in seconds
      bidders: 8,
      viewers: 64,
      isWatched: false,
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop",
    },
  ])

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setAuctions((prev) =>
        prev.map((auction) => ({
          ...auction,
          timeLeft: auction.timeLeft > 0 ? auction.timeLeft - 1 : 0,
        })),
      )
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time as hh:mm:ss or mm:ss
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
    }

    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Get urgency class based on time left
  const getUrgencyClass = (timeLeft) => {
    if (timeLeft < 300) return "text-red-500" // Less than 5 minutes
    if (timeLeft < 1800) return "text-orange-500" // Less than 30 minutes
    return "text-blue-400"
  }

  const toggleWatchlist = (id) => {
    setAuctions((prev) =>
      prev.map((auction) => (auction.id === id ? { ...auction, isWatched: !auction.isWatched } : auction)),
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {auctions.map((auction) => (
        <Card key={auction.id} className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden group">
          <div className="relative">
            <Image
              src={auction.image || "/placeholder.svg"}
              alt={auction.title}
              width={600}
              height={400}
              className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <Badge variant="outline" className="border-blue-800 bg-blue-900/50 backdrop-blur-sm text-blue-400 gap-1">
                <Users className="h-3 w-3" />
                {auction.bidders}
              </Badge>
              <Badge
                variant="outline"
                className="border-indigo-800 bg-indigo-900/50 backdrop-blur-sm text-indigo-400 gap-1"
              >
                <Eye className="h-3 w-3" />
                {auction.viewers}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 left-3 ${auction.isWatched ? "text-red-400" : "text-slate-400"} hover:bg-slate-800/50 backdrop-blur-sm`}
              onClick={() => toggleWatchlist(auction.id)}
            >
              <Heart className={`h-5 w-5 ${auction.isWatched ? "fill-red-400" : ""}`} />
            </Button>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold line-clamp-1">{auction.title}</h3>
            <p className="text-sm text-slate-400 mb-3 line-clamp-1">{auction.description}</p>

            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">Current Bid</span>
              <span className="text-sm text-slate-400">Time Left</span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <div className="font-bold">${auction.currentBid.toLocaleString()}</div>
              <div className={`font-bold ${getUrgencyClass(auction.timeLeft)}`}>{formatTime(auction.timeLeft)}</div>
            </div>

            <Progress
              value={
                (auction.timeLeft /
                  (auction.id === 1 ? 180 : auction.id === 2 ? 3600 : auction.id === 3 ? 7200 : 10800)) *
                100
              }
              className="h-1.5 bg-slate-700 mb-4"
              indicatorClassName={
                auction.timeLeft < 300 ? "bg-red-500" : auction.timeLeft < 1800 ? "bg-orange-500" : "bg-blue-500"
              }
            />

            <Link href="/auctions/live">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                <Clock className="h-4 w-4 mr-2" />
                Bid Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

