"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Clock,
  Eye,
  Heart,
  Info,
  MessageCircle,
  RotateCw,
  Share2,
  Shield,
  ThumbsUp,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react"
import BidHistory from "@/components/bid-history"
import LiveChat from "@/components/live-chat"
import BidControls from "@/components/bid-controls"
import AuctioneerCommentary from "@/components/auctioneer-commentary"
import SimilarItems from "@/components/similar-items"

export default function LiveAuctionPage() {
  const [currentBid, setCurrentBid] = useState(4250)
  const [timeLeft, setTimeLeft] = useState(180) // 3 minutes in seconds
  const [bidders, setBidders] = useState(24)
  const [viewers, setViewers] = useState(142)
  const [isWatched, setIsWatched] = useState(false)
  const [bidIncrement, setBidIncrement] = useState(100)
  const [activeTab, setActiveTab] = useState("details")

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0
        return prev - 1
      })

      // Randomly increase bids and viewers
      if (Math.random() > 0.9) {
        setCurrentBid((prev) => prev + bidIncrement)
        setBidders((prev) => prev + (Math.random() > 0.7 ? 1 : 0))
      }

      if (Math.random() > 0.8) {
        setViewers((prev) => prev + (Math.random() > 0.5 ? 1 : -1))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [bidIncrement])

  // Format time as mm:ss
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Get urgency class based on time left
  const getUrgencyClass = () => {
    if (timeLeft < 30) return "text-red-500 animate-pulse"
    if (timeLeft < 60) return "text-orange-500"
    return "text-blue-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/" className="flex items-center text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <div className="ml-auto flex items-center gap-3">
            <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-600 gap-1">
              <Eye className="h-3 w-3" />
              {viewers} Watching
            </Badge>
            <Badge variant="outline" className="border-indigo-200 bg-indigo-50 text-indigo-600 gap-1">
              <Users className="h-3 w-3" />
              {bidders} Bidders
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              className={`${isWatched ? "text-red-500" : "text-slate-400"} hover:bg-slate-100`}
              onClick={() => setIsWatched(!isWatched)}
            >
              <Heart className={`h-5 w-5 ${isWatched ? "fill-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-100">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images */}
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden bg-white border border-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1200&auto=format&fit=crop"
                alt="Vintage Rolex Submariner"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[4/3]"
              />

              {/* Overlay with auction info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <Badge className="bg-blue-600 text-white">Featured Auction</Badge>
                <Badge className="bg-slate-800/80 backdrop-blur-sm text-white gap-1">
                  <Shield className="h-3 w-3" />
                  Verified Authentic
                </Badge>
              </div>

              {/* Image navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? "bg-blue-500" : "bg-slate-300"}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-5 gap-2 mt-2">
              {[
                "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1548169874-53e85f753f1e?q=80&w=200&auto=format&fit=crop&flip=horizontal",
                "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&w=200&auto=format&fit=crop&flip=horizontal",
              ].map((src, i) => (
                <button
                  key={i}
                  className={`rounded-md overflow-hidden border-2 ${i === 0 ? "border-blue-500" : "border-transparent"}`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Thumbnail ${i + 1}`}
                    width={100}
                    height={100}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Product details tabs */}
            <div className="mt-8">
              <Tabs defaultValue="details" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="bg-white border border-slate-200 w-full justify-start">
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="history"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Bid History
                  </TabsTrigger>
                  <TabsTrigger value="chat" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Live Chat
                  </TabsTrigger>
                  <TabsTrigger
                    value="commentary"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Auctioneer Commentary
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-4">
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-slate-200">
                    <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm text-slate-500">Brand</h4>
                          <p className="text-slate-900">Rolex</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Model</h4>
                          <p className="text-slate-900">Submariner Date</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Reference Number</h4>
                          <p className="text-slate-900">116610LN</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Year</h4>
                          <p className="text-slate-900">1989</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm text-slate-500">Condition</h4>
                          <p className="text-slate-900">Excellent (9.2/10)</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Box & Papers</h4>
                          <p className="text-slate-900">Original Box, Papers, and Service History</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Movement</h4>
                          <p className="text-slate-900">Automatic</p>
                        </div>
                        <div>
                          <h4 className="text-sm text-slate-500">Case Size</h4>
                          <p className="text-slate-900">40mm</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h3 className="text-xl font-semibold mb-4">Description</h3>
                      <p className="text-slate-600">
                        This vintage 1989 Rolex Submariner Date (Ref. 116610LN) is in exceptional condition, featuring
                        the iconic black dial and bezel that defined luxury diving watches. The timepiece has been
                        meticulously maintained, with a recent service by an authorized Rolex dealer.
                      </p>
                      <p className="text-slate-600 mt-4">
                        The watch comes complete with its original box, papers, and service history documentation,
                        confirming its authenticity and provenance. The automatic movement functions flawlessly, and the
                        luminous markers and hands still glow brightly.
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h3 className="text-xl font-semibold mb-4">Seller Information</h3>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 border-2 border-blue-600">
                          <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" />
                          <AvatarFallback>LW</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                          <h4 className="font-medium">Luxury Watches Ltd.</h4>
                          <div className="flex items-center mt-1">
                            <Badge className="bg-green-600 text-white mr-2">Verified Seller</Badge>
                            <div className="flex items-center text-yellow-600">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              <span className="text-sm">98% Positive (243 reviews)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h3 className="text-xl font-semibold mb-4">Authentication Details</h3>
                      <div className="bg-blue-50 rounded-lg p-4 flex items-start">
                        <Shield className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-slate-600">
                            This item has been authenticated by our expert team. The authentication process includes
                            verification of serial numbers, movement inspection, and comparison with manufacturer
                            records.
                          </p>
                          <Button variant="link" className="text-blue-600 p-0 h-auto mt-2">
                            View Authentication Certificate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="history" className="mt-4">
                  <BidHistory />
                </TabsContent>

                <TabsContent value="chat" className="mt-4">
                  <LiveChat />
                </TabsContent>

                <TabsContent value="commentary" className="mt-4">
                  <AuctioneerCommentary />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Column - Bidding Interface */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="bg-white border-slate-200">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-2xl font-bold text-slate-900">Vintage Rolex Submariner (1989)</h1>
                      <p className="text-slate-500 mt-1">Ref. 116610LN with Box & Papers</p>
                    </div>

                    {/* Current bid and timer */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">Current Bid</span>
                        <span className="text-slate-600">Time Remaining</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-slate-900">${currentBid.toLocaleString()}</div>
                        <div className={`text-2xl font-bold ${getUrgencyClass()}`}>{formatTime(timeLeft)}</div>
                      </div>

                      {/* Progress bar for time */}
                      <div className="mt-3">
                        <Progress
                          value={(timeLeft / 180) * 100}
                          className="h-1.5 bg-slate-200"
                          indicatorClassName={
                            timeLeft < 30 ? "bg-red-500" : timeLeft < 60 ? "bg-orange-500" : "bg-blue-500"
                          }
                        />
                      </div>

                      <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
                        <span>Starting Bid: $3,500</span>
                        <span>Bid Increment: ${bidIncrement}</span>
                      </div>
                    </div>

                    {/* Bid controls */}
                    <BidControls
                      currentBid={currentBid}
                      bidIncrement={bidIncrement}
                      onBidIncrementChange={setBidIncrement}
                    />

                    {/* Market insights */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold flex items-center text-slate-900">
                          <TrendingUp className="h-4 w-4 mr-2 text-blue-600" />
                          Market Insights
                        </h3>
                        <Button variant="ghost" size="icon" className="h-6 w-6 text-slate-400">
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-sm">Est. Market Value</span>
                          <span className="font-medium text-slate-900">$4,800 - $5,200</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-sm">Recent Sale Average</span>
                          <span className="font-medium text-slate-900">$4,950</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-600 text-sm">Bid Activity</span>
                          <span className="font-medium text-green-600">High</span>
                        </div>
                      </div>
                    </div>

                    {/* Auction details */}
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Auction Ends</h4>
                          <p className="text-slate-500 text-sm">Today at 8:30 PM EST</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <RotateCw className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Auto-Extend</h4>
                          <p className="text-slate-500 text-sm">Auction extends 2 min if bid placed in final minute</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Zap className="h-5 w-5 text-slate-400 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-slate-900">Buyer's Premium</h4>
                          <p className="text-slate-500 text-sm">10% added to final bid price</p>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Ask Question
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Similar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar items preview */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-900">Similar Items</h3>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    View All
                  </Button>
                </div>
                <SimilarItems />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

