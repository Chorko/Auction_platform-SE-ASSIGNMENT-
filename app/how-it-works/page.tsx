import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Bell, ChevronRight, Clock, Gavel, Heart, Search, Shield, User } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md p-1">
              <Award className="h-6 w-6 text-white" />
            </span>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              EliteBid
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white hover:bg-slate-800">
              <Heart className="h-5 w-5" />
            </Button>
            <Link href="/dashboard">
              <Button variant="outline" className="border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200">
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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-indigo-200">
            How EliteBid Works
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            EliteBid provides a seamless and secure platform for buying and selling extraordinary items through
            real-time auctions. Here's everything you need to know to get started.
          </p>
        </section>

        {/* Step-by-Step Guide */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <CardContent className="p-6 pt-8 relative">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">Create an Account</h3>
                <p className="text-slate-300 mb-4">
                  Sign up for a free account to start bidding. Premium members get access to exclusive auctions and
                  reduced fees.
                </p>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop"
                    alt="Create an account"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Verify your email and phone number
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Complete your profile with payment information
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Set up notifications for auctions you're interested in
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <CardContent className="p-6 pt-8 relative">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">Browse and Research</h3>
                <p className="text-slate-300 mb-4">
                  Explore our extensive catalog of auctions. Use filters to find items that match your interests and
                  budget.
                </p>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                    alt="Browse auctions"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Review detailed item descriptions and condition reports
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Check authentication details and seller ratings
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Add items to your watchlist to track their progress
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/70 backdrop-blur-md border-slate-800 overflow-hidden">
              <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              <CardContent className="p-6 pt-8 relative">
                <div className="absolute -top-6 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">Bid and Win</h3>
                <p className="text-slate-300 mb-4">
                  Place bids on items you want to acquire. Use our advanced bidding tools to increase your chances of
                  winning.
                </p>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1588458946999-3d8562ce7622?q=80&w=600&auto=format&fit=crop"
                    alt="Bid and win"
                    fill
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Choose between quick bids, custom bids, or max bids
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Enable auto-bidding or sniper bidding for strategic advantages
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Receive real-time notifications when you're outbid
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bidding Types */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Bidding Options Explained</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-900/30 p-3 rounded-full mr-4">
                  <Gavel className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Quick Bidding</h3>
              </div>
              <p className="text-slate-300 mb-4">
                The simplest way to bid. Choose from preset increments to quickly place a bid above the current highest
                bid.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-300">
                  <strong>Example:</strong> Current bid is $1,000. You can quickly select +$100 to bid $1,100.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-900/30 p-3 rounded-full mr-4">
                  <Search className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold">Custom Bidding</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Enter a specific bid amount that's higher than the current bid plus the minimum increment.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-300">
                  <strong>Example:</strong> Current bid is $1,000 with $100 increments. You can bid any amount $1,100 or
                  higher.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-900/30 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Max Bidding</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Set the maximum amount you're willing to pay. The system will automatically bid on your behalf up to
                your maximum.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-300">
                  <strong>Example:</strong> Current bid is $1,000. You set a max bid of $1,500. If someone bids $1,100,
                  the system automatically bids $1,200 for you.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-900/30 p-3 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold">Sniper Bidding</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Schedule a bid to be placed in the final seconds of an auction, giving other bidders minimal time to
                respond.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-sm text-slate-300">
                  <strong>Example:</strong> You set a sniper bid of $1,500 to be placed 10 seconds before the auction
                  ends, regardless of the current bid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees and Policies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Fees and Policies</h2>

          <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Buyer's Premium</h3>
                <p className="text-slate-300 mb-4">
                  A percentage added to the final bid price that goes to the auction house. This is standard practice in
                  the auction industry.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Standard accounts: 10% buyer's premium
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Premium accounts: 8% buyer's premium
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    VIP accounts: 5% buyer's premium
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Payment and Shipping</h3>
                <p className="text-slate-300 mb-4">
                  We offer secure payment processing and shipping coordination for all successful bids.
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Payment due within 48 hours of auction close
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Multiple payment methods accepted (credit/debit cards, PayPal, wire transfer, cryptocurrency)
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                    Shipping costs calculated based on item size, weight, and destination
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">What happens if I win an auction?</h3>
              <p className="text-slate-300">
                You'll receive an email notification with payment instructions. Once payment is processed, shipping
                arrangements will be made.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Can I cancel a bid?</h3>
              <p className="text-slate-300">
                In exceptional circumstances, bids may be retracted. Contact customer support immediately if you need to
                cancel a bid.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">How do I know if items are authentic?</h3>
              <p className="text-slate-300">
                All items are verified by our expert team. Authentication certificates are provided for high-value
                items.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">What if an item arrives damaged?</h3>
              <p className="text-slate-300">
                All items are insured during shipping. Contact customer support within 48 hours of delivery to report
                any damage.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">How do I become a seller?</h3>
              <p className="text-slate-300">
                Apply through our seller application process. We review all applications to ensure quality standards are
                met.
              </p>
            </div>

            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">What are the benefits of a premium membership?</h3>
              <p className="text-slate-300">
                Premium members enjoy reduced fees, early access to auctions, and exclusive invitations to VIP auctions.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Bidding?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of collectors and enthusiasts in discovering extraordinary items through our real-time
            auctions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auctions/live">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg py-6 px-8">
                Explore Live Auctions
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-slate-200 text-lg py-6 px-8"
            >
              Create Free Account
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md p-1">
                <Award className="h-5 w-5 text-white" />
              </span>
              <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                EliteBid
              </span>
            </Link>

            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} EliteBid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

