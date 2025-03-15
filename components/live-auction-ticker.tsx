"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, TrendingUp, Users } from "lucide-react"

export default function LiveAuctionTicker() {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      title: "Vintage Rolex Submariner",
      currentBid: 4250,
      bidders: 24,
      trend: "up",
    },
    {
      id: 2,
      title: "Rare First Edition Book Collection",
      currentBid: 1850,
      bidders: 12,
      trend: "up",
    },
    {
      id: 3,
      title: "Signed Michael Jordan Jersey",
      currentBid: 5200,
      bidders: 31,
      trend: "up",
    },
    {
      id: 4,
      title: "Antique Victorian Writing Desk",
      currentBid: 950,
      bidders: 8,
      trend: "stable",
    },
    {
      id: 5,
      title: "1967 Fender Stratocaster",
      currentBid: 7800,
      bidders: 18,
      trend: "up",
    },
    {
      id: 6,
      title: "Original Andy Warhol Print",
      currentBid: 12500,
      bidders: 15,
      trend: "up",
    },
  ])

  const tickerRef = useRef(null)

  // Simulate bid updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAuctions((prev) =>
        prev.map((auction) => {
          // Randomly update some bids
          if (Math.random() > 0.7) {
            const bidIncrement = Math.floor(Math.random() * 5) * 50 + 50 // Random increment between 50 and 250
            return {
              ...auction,
              currentBid: auction.currentBid + bidIncrement,
              bidders: Math.random() > 0.8 ? auction.bidders + 1 : auction.bidders,
              trend: "up",
            }
          }
          return auction
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Ticker animation
  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    const tickerWidth = ticker.scrollWidth
    const animation = ticker.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${tickerWidth / 2}px)` }],
      {
        duration: 30000,
        iterations: Number.POSITIVE_INFINITY,
      },
    )

    return () => {
      if (animation) animation.cancel()
    }
  }, [auctions])

  // Double the auctions for seamless looping
  const tickerItems = [...auctions, ...auctions]

  return (
    <div className="mt-10 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-lg p-3 overflow-hidden">
      <div className="flex items-center">
        <Badge className="bg-blue-600 text-white mr-3 whitespace-nowrap">
          <Clock className="h-3 w-3 mr-1" />
          Live Now
        </Badge>

        <div className="overflow-hidden flex-1">
          <div ref={tickerRef} className="flex whitespace-nowrap">
            {tickerItems.map((auction, index) => (
              <div key={`${auction.id}-${index}`} className="flex items-center mr-12">
                <span className="text-slate-900 font-medium mr-2">{auction.title}</span>
                <span className="text-blue-600 font-bold flex items-center mr-2">
                  <DollarSign className="h-3 w-3 mr-0.5" />
                  {auction.currentBid.toLocaleString()}
                </span>
                <span className="text-slate-500 flex items-center mr-2">
                  <Users className="h-3 w-3 mr-0.5" />
                  {auction.bidders}
                </span>
                {auction.trend === "up" && <TrendingUp className="h-3 w-3 text-green-600" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

