"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Activity,
  Award,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Heart,
  Home,
  Settings,
  Star,
  TrendingUp,
} from "lucide-react"
import BiddingActivityChart from "@/components/bidding-activity-chart"
import WatchlistItems from "@/components/watchlist-items"
import RecommendedAuctions from "@/components/recommended-auctions"
import BidHistoryTable from "@/components/bid-history-table"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [chartType, setChartType] = useState("area")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md p-1">
              <Award className="h-6 w-6 text-white" />
            </span>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              EliteBid
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Heart className="h-5 w-5" />
            </Button>
            <Link href="/auctions/live">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Live Auctions
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-24">
            <div className="flex items-center mb-6">
              <Avatar className="h-12 w-12 border-2 border-blue-600">
                <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <h2 className="font-semibold text-slate-900">John Doe</h2>
                <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">Premium Member</Badge>
              </div>
            </div>

            <nav className="space-y-1">
              <Link
                href="/dashboard"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Home className="h-5 w-5" />
                <span>Overview</span>
              </Link>
              <Link
                href="/dashboard/bids"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "bids"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Activity className="h-5 w-5" />
                <span>My Bids</span>
              </Link>
              <Link
                href="/dashboard/watchlist"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "watchlist"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Heart className="h-5 w-5" />
                <span>Watchlist</span>
              </Link>
              <Link
                href="/dashboard/won"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "won"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Award className="h-5 w-5" />
                <span>Won Auctions</span>
              </Link>
              <Link
                href="/dashboard/wallet"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "wallet"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <CreditCard className="h-5 w-5" />
                <span>Wallet</span>
              </Link>
              <Link
                href="/dashboard/settings"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  activeTab === "settings"
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </nav>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-medium flex items-center mb-2 text-slate-900">
                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                  Membership Status
                </h3>
                <p className="text-sm text-slate-600 mb-3">Premium until Dec 31, 2025</p>
                <Progress value={65} className="h-1.5 bg-slate-200" indicatorClassName="bg-blue-500" />
                <Button variant="link" className="text-blue-600 p-0 h-auto mt-2 text-sm">
                  Upgrade to VIP
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2 text-slate-900">Dashboard</h1>
            <p className="text-slate-600">Welcome back, John. Here's what's happening with your auctions.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Active Bids</p>
                    <h3 className="text-2xl font-bold mt-1 text-slate-900">12</h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <Badge className="bg-green-100 text-green-600 hover:bg-green-200 border-green-200">
                    +3 new today
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Won Auctions</p>
                    <h3 className="text-2xl font-bold mt-1 text-slate-900">8</h3>
                  </div>
                  <div className="bg-indigo-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <Badge className="bg-green-100 text-green-600 hover:bg-green-200 border-green-200">
                    +2 this month
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Total Spent</p>
                    <h3 className="text-2xl font-bold mt-1 text-slate-900">$12,450</h3>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <span className="text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% from last month
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">Watchlist</p>
                    <h3 className="text-2xl font-bold mt-1 text-slate-900">24</h3>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm">
                  <Badge className="bg-orange-100 text-orange-600 hover:bg-orange-200 border-orange-200">
                    5 ending soon
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bidding Activity Chart */}
          <Card className="bg-white border-slate-200 mb-8">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-slate-900">Bidding Activity</CardTitle>
                  <CardDescription className="text-slate-500">
                    Your bidding patterns over the last 30 days
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Tabs defaultValue="30days">
                    <TabsList className="bg-slate-100 border border-slate-200">
                      <TabsTrigger
                        value="7days"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        7d
                      </TabsTrigger>
                      <TabsTrigger
                        value="30days"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        30d
                      </TabsTrigger>
                      <TabsTrigger
                        value="90days"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        90d
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <Tabs value={chartType} onValueChange={setChartType}>
                    <TabsList className="bg-slate-100 border border-slate-200">
                      <TabsTrigger
                        value="area"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Area
                      </TabsTrigger>
                      <TabsTrigger
                        value="bar"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Bar
                      </TabsTrigger>
                      <TabsTrigger
                        value="line"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Line
                      </TabsTrigger>
                      <TabsTrigger
                        value="pie"
                        className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Pie
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <BiddingActivityChart chartType={chartType} />
            </CardContent>
          </Card>

          {/* Recent Activity and Watchlist */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white border-slate-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-900">Recent Bid Activity</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <BidHistoryTable />
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-slate-900">Watchlist</CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <WatchlistItems />
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Auctions */}
          <Card className="bg-white border-slate-200 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-slate-900">Upcoming Auctions</CardTitle>
                  <CardDescription className="text-slate-500">
                    Based on your interests and bidding history
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <RecommendedAuctions />
            </CardContent>
          </Card>

          {/* Premium Features */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Star className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Unlock Premium Features</h3>
                  <p className="text-slate-600 mb-4">
                    Get early access to exclusive auctions, reduced fees, and advanced bidding tools.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge className="bg-white text-slate-800">VIP Auctions</Badge>
                    <Badge className="bg-white text-slate-800">Reduced Fees</Badge>
                    <Badge className="bg-white text-slate-800">Sniper Bidding</Badge>
                    <Badge className="bg-white text-slate-800">AR Previews</Badge>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                  Upgrade Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

