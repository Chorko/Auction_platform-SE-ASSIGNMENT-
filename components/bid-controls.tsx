"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUp, Bolt, Gavel, Lock, Zap } from "lucide-react"

export default function BidControls({ currentBid, bidIncrement, onBidIncrementChange }) {
  const [bidMethod, setBidMethod] = useState("quick")
  const [customBid, setCustomBid] = useState(currentBid + bidIncrement)
  const [maxBid, setMaxBid] = useState(currentBid + bidIncrement * 5)
  const [autoBidEnabled, setAutoBidEnabled] = useState(false)
  const [sniperBidEnabled, setSniperBidEnabled] = useState(false)

  const handleQuickBid = () => {
    // In a real app, this would submit the bid to the server
    console.log(`Placing quick bid: $${currentBid + bidIncrement}`)
  }

  const handleCustomBid = () => {
    // In a real app, this would submit the bid to the server
    console.log(`Placing custom bid: $${customBid}`)
  }

  const handleMaxBid = () => {
    // In a real app, this would submit the max bid to the server
    console.log(`Setting max bid: $${maxBid}`)
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="quick" onValueChange={setBidMethod}>
        <TabsList className="bg-slate-100 border border-slate-200 w-full">
          <TabsTrigger value="quick" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Gavel className="h-4 w-4 mr-2" />
            Quick Bid
          </TabsTrigger>
          <TabsTrigger value="custom" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <ArrowUp className="h-4 w-4 mr-2" />
            Custom Bid
          </TabsTrigger>
          <TabsTrigger value="max" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Bolt className="h-4 w-4 mr-2" />
            Max Bid
          </TabsTrigger>
        </TabsList>

        <TabsContent value="quick" className="mt-4">
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant="outline"
              className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
              onClick={() => onBidIncrementChange(100)}
            >
              +$100
            </Button>
            <Button
              variant="outline"
              className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
              onClick={() => onBidIncrementChange(250)}
            >
              +$250
            </Button>
            <Button
              variant="outline"
              className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
              onClick={() => onBidIncrementChange(500)}
            >
              +$500
            </Button>
          </div>

          <Button
            className="w-full mt-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            onClick={handleQuickBid}
          >
            Place Bid: ${(currentBid + bidIncrement).toLocaleString()}
          </Button>
        </TabsContent>

        <TabsContent value="custom" className="mt-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="custom-bid" className="text-sm text-slate-500">
                Enter your bid amount
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="custom-bid"
                  type="number"
                  min={currentBid + bidIncrement}
                  step={50}
                  value={customBid}
                  onChange={(e) => setCustomBid(Number(e.target.value))}
                  className="bg-white border-slate-200 text-slate-800 focus:border-blue-500"
                />
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                  onClick={handleCustomBid}
                >
                  Bid
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Minimum bid: ${(currentBid + bidIncrement).toLocaleString()}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="auto-bid" checked={autoBidEnabled} onCheckedChange={setAutoBidEnabled} />
              <Label htmlFor="auto-bid" className="flex items-center text-slate-800">
                <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                Auto-bid until my maximum
              </Label>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="max" className="mt-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <Label htmlFor="max-bid-slider" className="text-sm text-slate-500">
                  Set your maximum bid
                </Label>
                <span className="text-sm font-medium text-slate-900">${maxBid.toLocaleString()}</span>
              </div>
              <Slider
                id="max-bid-slider"
                min={currentBid + bidIncrement}
                max={currentBid + bidIncrement * 10}
                step={bidIncrement}
                value={[maxBid]}
                onValueChange={(value) => setMaxBid(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>Min: ${(currentBid + bidIncrement).toLocaleString()}</span>
                <span>Max: ${(currentBid + bidIncrement * 10).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="sniper-bid" checked={sniperBidEnabled} onCheckedChange={setSniperBidEnabled} />
              <Label htmlFor="sniper-bid" className="flex items-center text-slate-800">
                <Bolt className="h-4 w-4 mr-2 text-yellow-500" />
                Sniper bid (place in final 10 seconds)
              </Label>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              onClick={handleMaxBid}
            >
              <Lock className="h-4 w-4 mr-2" />
              Set Maximum Bid
            </Button>

            <p className="text-xs text-slate-500 mt-1">
              We'll bid automatically for you up to your maximum. Your maximum bid is kept confidential from other
              bidders.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

