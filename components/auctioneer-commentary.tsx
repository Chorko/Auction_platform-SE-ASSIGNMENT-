import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Info } from "lucide-react"

export default function AuctioneerCommentary() {
  const comments = [
    {
      id: 1,
      user: {
        name: "David Wilson",
        role: "Lead Auctioneer",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
        initials: "DW",
      },
      message:
        "Welcome to this exceptional auction featuring a vintage 1989 Rolex Submariner. This is a rare opportunity to acquire a timepiece with complete box and papers, which significantly increases its collectible value.",
      time: "15 mins ago",
      isHighlighted: true,
    },
    {
      id: 2,
      user: {
        name: "David Wilson",
        role: "Lead Auctioneer",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
        initials: "DW",
      },
      message:
        "The bidding has been quite active for this piece. We're seeing strong interest from collectors in Europe and North America. The condition rating of 9.2/10 is exceptional for a watch of this age.",
      time: "10 mins ago",
      isHighlighted: false,
    },
    {
      id: 3,
      user: {
        name: "Jennifer Hayes",
        role: "Watch Specialist",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
        initials: "JH",
      },
      message:
        "I'd like to point out that this particular reference has seen a steady appreciation of approximately 8-10% annually over the past five years. The recent service by an authorized Rolex dealer ensures it's in perfect working condition.",
      time: "7 mins ago",
      isHighlighted: false,
    },
    {
      id: 4,
      user: {
        name: "David Wilson",
        role: "Lead Auctioneer",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop",
        initials: "DW",
      },
      message:
        "We're now seeing bids coming in rapidly as we approach the final minutes. This is typical for high-demand items like this Submariner. Remember that the auction will auto-extend if bids are placed in the final minute.",
      time: "3 mins ago",
      isHighlighted: true,
    },
  ]

  return (
    <Card className="bg-white border-slate-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-slate-900">Auctioneer Commentary</h3>
            <p className="text-xs text-slate-500">Expert insights and auction updates</p>
          </div>
          <Badge className="bg-blue-600 text-white">Live</Badge>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`p-4 rounded-lg ${
                comment.isHighlighted ? "bg-blue-50 border border-blue-200" : "bg-slate-50 border border-slate-200"
              }`}
            >
              <div className="flex gap-3">
                <Avatar className="h-10 w-10 border border-slate-200">
                  <AvatarImage src={comment.user.avatar} />
                  <AvatarFallback>{comment.user.initials}</AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-slate-900">{comment.user.name}</span>
                    <Badge className="bg-indigo-100 text-indigo-600 hover:bg-indigo-200 border-indigo-200">
                      {comment.user.role}
                    </Badge>
                    <span className="text-xs text-slate-400 ml-auto flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-slate-600 mt-2">{comment.message}</p>
                </div>
              </div>

              {comment.isHighlighted && (
                <div className="mt-3 pt-3 border-t border-blue-200 flex items-start">
                  <Info className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-sm text-blue-600">
                    This is an important update about the auction. Pay close attention to these highlighted messages for
                    critical information.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

