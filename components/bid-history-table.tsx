"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Clock, ExternalLink } from "lucide-react"

export default function BidHistoryTable() {
  const [bids, setBids] = useState([
    {
      id: 1,
      item: "Vintage Rolex Submariner",
      amount: 4250,
      date: "Today, 2:30 PM",
      status: "winning",
      auctionEnds: "Today, 8:30 PM",
    },
    {
      id: 2,
      item: "Rare First Edition Book Collection",
      amount: 1850,
      date: "Today, 11:45 AM",
      status: "outbid",
      auctionEnds: "Tomorrow, 3:00 PM",
    },
    {
      id: 3,
      item: "Signed Michael Jordan Jersey",
      amount: 5200,
      date: "Yesterday, 4:15 PM",
      status: "winning",
      auctionEnds: "May 5, 6:00 PM",
    },
    {
      id: 4,
      item: "Antique Victorian Writing Desk",
      amount: 950,
      date: "Apr 28, 1:20 PM",
      status: "outbid",
      auctionEnds: "Apr 30, 12:00 PM",
    },
    {
      id: 5,
      item: "1967 Fender Stratocaster",
      amount: 7800,
      date: "Apr 25, 9:30 AM",
      status: "won",
      auctionEnds: "Apr 27, 8:00 PM",
    },
  ])

  const getStatusBadge = (status) => {
    switch (status) {
      case "winning":
        return (
          <Badge className="bg-green-100 text-green-600 hover:bg-green-200 border-green-200 gap-1">
            <Award className="h-3 w-3" />
            Winning
          </Badge>
        )
      case "outbid":
        return <Badge className="bg-red-100 text-red-600 hover:bg-red-200 border-red-200">Outbid</Badge>
      case "won":
        return (
          <Badge className="bg-purple-100 text-purple-600 hover:bg-purple-200 border-purple-200 gap-1">
            <Award className="h-3 w-3 fill-purple-600" />
            Won
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="text-left py-3 px-2 text-sm font-medium text-slate-500">Item</th>
            <th className="text-right py-3 px-2 text-sm font-medium text-slate-500">Bid Amount</th>
            <th className="text-right py-3 px-2 text-sm font-medium text-slate-500">Date</th>
            <th className="text-right py-3 px-2 text-sm font-medium text-slate-500">Status</th>
            <th className="text-right py-3 px-2 text-sm font-medium text-slate-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.id} className="border-b border-slate-200">
              <td className="py-3 px-2">
                <div className="font-medium line-clamp-1 text-slate-900">{bid.item}</div>
                <div className="text-xs text-slate-500 flex items-center mt-1">
                  <Clock className="h-3 w-3 mr-1" />
                  Ends: {bid.auctionEnds}
                </div>
              </td>
              <td className="py-3 px-2 text-right font-medium text-slate-900">${bid.amount.toLocaleString()}</td>
              <td className="py-3 px-2 text-right text-sm text-slate-500">{bid.date}</td>
              <td className="py-3 px-2 text-right">{getStatusBadge(bid.status)}</td>
              <td className="py-3 px-2 text-right">
                {bid.status === "outbid" ? (
                  <Button
                    size="sm"
                    className="h-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  >
                    Bid Again
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

