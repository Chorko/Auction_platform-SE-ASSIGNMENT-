import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Eye, Heart, Users } from "lucide-react"

export default function TrendingItems({ type = "trending" }) {
  const trendingItems = [
    {
      id: 1,
      title: "Vintage Rolex Submariner (1989)",
      currentBid: 4250,
      timeLeft: "03:00",
      bidders: 24,
      viewers: 142,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rare First Edition Book Collection",
      currentBid: 1850,
      timeLeft: "01:00:00",
      bidders: 12,
      viewers: 89,
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Signed Michael Jordan Jersey",
      currentBid: 5200,
      timeLeft: "02:00:00",
      bidders: 31,
      viewers: 215,
      image: "https://images.unsplash.com/photo-1515459961680-58041359e1ff?q=80&w=600&auto=format&fit=crop",
    },
  ]

  const endingItems = [
    {
      id: 4,
      title: "Antique Victorian Writing Desk",
      currentBid: 950,
      timeLeft: "00:15:00",
      bidders: 8,
      viewers: 64,
      image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "1967 Fender Stratocaster",
      currentBid: 7800,
      timeLeft: "00:30:00",
      bidders: 18,
      viewers: 93,
      image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Original Andy Warhol Print",
      currentBid: 12500,
      timeLeft: "00:45:00",
      bidders: 15,
      viewers: 127,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop",
    },
  ]

  const items = type === "trending" ? trendingItems : endingItems

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden group">
          <div className="relative">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={300}
              height={200}
              className="w-full aspect-[3/2] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 right-3 flex gap-2">
              <Badge variant="outline" className="border-blue-800 bg-blue-900/50 backdrop-blur-sm text-blue-400 gap-1">
                <Users className="h-3 w-3" />
                {item.bidders}
              </Badge>
              <Badge
                variant="outline"
                className="border-indigo-800 bg-indigo-900/50 backdrop-blur-sm text-indigo-400 gap-1"
              >
                <Eye className="h-3 w-3" />
                {item.viewers}
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 left-3 text-slate-400 hover:bg-slate-800/50 backdrop-blur-sm"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold line-clamp-1">{item.title}</h3>

            <div className="flex justify-between items-center mt-2 mb-4">
              <div>
                <span className="text-sm text-slate-400 block">Current Bid</span>
                <span className="font-bold">${item.currentBid.toLocaleString()}</span>
              </div>
              <div className="text-right">
                <span className="text-sm text-slate-400 block">Time Left</span>
                <span
                  className={`font-bold ${
                    item.timeLeft.startsWith("00:")
                      ? "text-red-500"
                      : item.timeLeft.startsWith("01:")
                        ? "text-orange-500"
                        : "text-blue-400"
                  }`}
                >
                  {item.timeLeft}
                </span>
              </div>
            </div>

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

