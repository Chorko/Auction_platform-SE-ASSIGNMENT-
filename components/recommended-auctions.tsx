import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Heart, Star } from "lucide-react"

export default function RecommendedAuctions() {
  const auctions = [
    {
      id: 1,
      title: "Patek Philippe Nautilus",
      description: "Ref. 5711/1A-010 with Box & Papers",
      date: "Tomorrow, 8:00 PM EST",
      estimatedValue: "$80,000 - $100,000",
      isVIP: true,
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Banksy Original Print",
      description: "Limited Edition, Signed and Numbered",
      date: "May 5, 2:30 PM EST",
      estimatedValue: "$15,000 - $25,000",
      isVIP: false,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "1965 Porsche 911 Memorabilia Collection",
      description: "Factory Documentation and Rare Photographs",
      date: "May 8, 6:00 PM EST",
      estimatedValue: "$8,000 - $12,000",
      isVIP: false,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=300&auto=format&fit=crop",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {auctions.map((auction) => (
        <Card key={auction.id} className="bg-white border-slate-200 overflow-hidden group">
          <div className="relative">
            <Image
              src={auction.image || "/placeholder.svg"}
              alt={auction.title}
              width={200}
              height={150}
              className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 right-3">
              {auction.isVIP && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
                  <Star className="h-3 w-3 mr-1 fill-white" />
                  VIP Only
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 left-3 text-slate-400 hover:bg-white/50 backdrop-blur-sm"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold line-clamp-1 text-slate-900">{auction.title}</h3>
            <p className="text-sm text-slate-500 mb-3 line-clamp-1">{auction.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Date</span>
                <span className="text-sm font-medium flex items-center text-slate-900">
                  <Calendar className="h-3 w-3 mr-1 text-blue-600" />
                  {auction.date}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Est. Value</span>
                <span className="text-sm font-medium text-slate-900">{auction.estimatedValue}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 border-slate-200 bg-white hover:bg-slate-50 text-slate-800">
                Set Reminder
              </Button>
              <Link href="/auctions/live" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  Preview
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

