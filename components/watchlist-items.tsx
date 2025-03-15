"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Heart } from "lucide-react"

export default function WatchlistItems() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner (1989)",
      currentBid: 4250,
      timeLeft: "03:00",
      endingSoon: true,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rare First Edition Book Collection",
      currentBid: 1850,
      timeLeft: "01:00:00",
      endingSoon: false,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Signed Michael Jordan Jersey",
      currentBid: 5200,
      timeLeft: "02:00:00",
      endingSoon: false,
      image: "https://images.unsplash.com/photo-1515459961680-58041359e1ff?q=80&w=150&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Antique Victorian Writing Desk",
      currentBid: 950,
      timeLeft: "00:15:00",
      endingSoon: true,
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=150&auto=format&fit=crop",
    },
  ])

  const removeFromWatchlist = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            width={80}
            height={80}
            className="w-16 h-16 object-cover rounded-md"
          />

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h4 className="font-medium line-clamp-1 text-slate-900">{item.title}</h4>
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 text-red-500 hover:bg-slate-100 -mt-1 -mr-1"
                onClick={() => removeFromWatchlist(item.id)}
              >
                <Heart className="h-4 w-4 fill-red-500" />
              </Button>
            </div>

            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-slate-500">Current Bid</span>
              <span className="font-medium text-slate-900">${item.currentBid.toLocaleString()}</span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <span className="text-sm text-slate-500">Ends in</span>
              <span className={`font-medium ${item.endingSoon ? "text-red-500" : "text-blue-600"}`}>
                {item.timeLeft}
              </span>
            </div>

            <div className="mt-2">
              <Link href="/auctions/live">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-7 border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                >
                  <Clock className="h-3 w-3 mr-1" />
                  Bid Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

