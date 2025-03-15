import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Bell, User, Clock, TrendingUp, Award, Heart, ChevronRight } from "lucide-react"
import FeaturedAuctions from "@/components/featured-auctions"
import LiveAuctionTicker from "@/components/live-auction-ticker"
import CategoryGrid from "@/components/category-grid"
import TrendingItems from "@/components/trending-items"

export default function HomePage() {
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

          <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search auctions, items, or sellers..."
              className="pl-10 bg-white border-slate-200 text-slate-800 focus:border-blue-500 w-full"
            />
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900 hover:bg-slate-100">
              <Heart className="h-5 w-5" />
            </Button>
            <Link href="/dashboard">
              <Button variant="outline" className="border-slate-200 bg-white hover:bg-slate-50 text-slate-800">
                <User className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <Link href="/auctions/live">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                Live Auctions
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607435097405-db48f377bff6?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200">
                Live Now: 243 Active Auctions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Bid, Win, and Collect Extraordinary Items
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8">
                Join thousands of collectors and enthusiasts in real-time auctions for rare, unique, and valuable items
                from around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/auctions/live">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 px-8">
                    Start Bidding Now
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button
                    variant="outline"
                    className="border-slate-200 bg-white/50 hover:bg-slate-100 text-slate-800 text-lg py-6 px-8"
                  >
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>

            <LiveAuctionTicker />
          </div>
        </section>

        {/* Featured Auctions */}
        <section className="py-16 bg-slate-50/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Featured Auctions</h2>
              <Link href="/auctions" className="text-blue-600 hover:text-blue-700 flex items-center">
                View All <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <FeaturedAuctions />
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Browse Categories</h2>
            <CategoryGrid />
          </div>
        </section>

        {/* Trending & Ending Soon */}
        <section className="py-16 bg-slate-50/50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="trending" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="bg-white border border-slate-200">
                  <TabsTrigger
                    value="trending"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending Now
                  </TabsTrigger>
                  <TabsTrigger
                    value="ending"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Ending Soon
                  </TabsTrigger>
                </TabsList>
                <Link href="/auctions" className="text-blue-600 hover:text-blue-700 flex items-center">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <TabsContent value="trending" className="mt-0">
                <TrendingItems type="trending" />
              </TabsContent>

              <TabsContent value="ending" className="mt-0">
                <TrendingItems type="ending" />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Ready to Start Your Bidding Journey?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Create an account today and get access to thousands of exclusive auctions, real-time bidding, and
              personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 px-8">
                Create Free Account
              </Button>
              <Link href="/how-it-works">
                <Button
                  variant="outline"
                  className="border-slate-200 bg-white/50 hover:bg-slate-100 text-slate-800 text-lg py-6 px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md p-1">
                  <Award className="h-5 w-5 text-white" />
                </span>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  EliteBid
                </span>
              </Link>
              <p className="text-slate-600 mb-4">
                The premier platform for luxury and collectible auctions, connecting buyers and sellers worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="/auctions" className="hover:text-blue-600">
                    All Auctions
                  </Link>
                </li>
                <li>
                  <Link href="/auctions/live" className="hover:text-blue-600">
                    Live Auctions
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-blue-600">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/sellers" className="hover:text-blue-600">
                    Top Sellers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Account</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="/dashboard" className="hover:text-blue-600">
                    My Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/bids" className="hover:text-blue-600">
                    My Bids
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/watchlist" className="hover:text-blue-600">
                    Watchlist
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard/settings" className="hover:text-blue-600">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li>
                  <Link href="/help" className="hover:text-blue-600">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-blue-600">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blue-600">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} EliteBid. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-900 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

