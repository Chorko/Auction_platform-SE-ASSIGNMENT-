import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SimilarItems() {
  const items = [
    {
      id: 1,
      title: "Rolex GMT-Master II",
      currentBid: 5800,
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Rolex Datejust 41",
      currentBid: 3900,
      image: "https://images.unsplash.com/photo-1548132847-af4a6ebe3c3b?q=80&w=200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Rolex Explorer II",
      currentBid: 4600,
      image: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=200&auto=format&fit=crop",
    },
  ]

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <Link key={item.id} href="/auctions/live">
          <Card className="bg-white border-slate-200 overflow-hidden hover:border-blue-300 transition-colors">
            <CardContent className="p-3">
              <div className="flex gap-3">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium line-clamp-1 text-slate-900">{item.title}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-slate-500">Current Bid</span>
                    <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
                      ${item.currentBid.toLocaleString()}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

