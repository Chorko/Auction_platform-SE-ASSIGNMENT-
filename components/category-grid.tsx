import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Clock, Gem, Landmark, Palette, ShoppingBag, Shirt, Ticket, Wine } from "lucide-react"

export default function CategoryGrid() {
  const categories = [
    {
      id: 1,
      name: "Watches & Jewelry",
      icon: <Clock className="h-6 w-6" />,
      count: 243,
      image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Art & Collectibles",
      icon: <Palette className="h-6 w-6" />,
      count: 189,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Fashion & Apparel",
      icon: <Shirt className="h-6 w-6" />,
      count: 156,
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Wine & Spirits",
      icon: <Wine className="h-6 w-6" />,
      count: 112,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Luxury Goods",
      icon: <ShoppingBag className="h-6 w-6" />,
      count: 98,
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Antiques",
      icon: <Landmark className="h-6 w-6" />,
      count: 87,
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Memorabilia",
      icon: <Ticket className="h-6 w-6" />,
      count: 76,
      image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Rare Gems",
      icon: <Gem className="h-6 w-6" />,
      count: 54,
      image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?q=80&w=500&auto=format&fit=crop",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <Card className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden h-full transition-transform hover:scale-105">
            <div className="relative">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="font-medium text-white">{category.name}</h3>
                      <p className="text-sm text-slate-300">{category.count} items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

