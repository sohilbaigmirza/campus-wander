import React, { useState } from 'react';
import { 
  Compass, MapPin, Users, Split, Sparkles, Smartphone, 
  Car, RefreshCw, IndianRupee, Star, ShieldCheck, Heart, 
  ArrowRight, Check, X, Bell, ChevronRight
} from 'lucide-react';

export default function App() {
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FD] text-slate-800 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* ─── Top Navigation Bar ────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">Meetra</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="text-indigo-600 hover:text-indigo-700 font-semibold transition">Home</a>
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition">How It Works</a>
            <a href="#about" className="hover:text-slate-900 transition">About</a>
          </nav>

          <button 
            onClick={() => setDownloadModal(true)}
            className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm hover:shadow-md transition active:scale-95"
          >
            Download App
          </button>
        </div>
      </header>

      {/* ─── Hero Section ────────────────────────────────────────────── */}
      <section id="home" className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
              Plan. Travel. Meet.
            </div>

            <h1 className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Your Next Outing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Is Better Together
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed">
              Meetra helps you plan short trips, find the right people, and explore amazing places — all based on your time, budget, and interests.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-1.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Plan Itineraries</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-1.5">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Find Travel Buddies</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-1.5">
                  <Split className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Split & Manage Costs</span>
              </div>
              <div className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center shadow-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Explore New Places</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button 
                onClick={() => setDownloadModal(true)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition"
              >
                <span>Download Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Google Play */}
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs transition">
                <div className="text-left leading-tight">
                  <p className="text-[9px] text-slate-400 uppercase tracking-wider">Get it on</p>
                  <p className="font-semibold text-xs">Google Play</p>
                </div>
              </button>

              {/* App Store */}
              <button className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs transition">
                <div className="text-left leading-tight">
                  <p className="text-[9px] text-slate-400 uppercase tracking-wider">Download on the</p>
                  <p className="font-semibold text-xs">App Store</p>
                </div>
              </button>
            </div>

            <p className="text-xs italic text-slate-500 pt-1">Small trips. Big memories.</p>
          </div>

          {/* Right Column: Phone Mockups Visual */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <div className="relative flex items-center justify-center gap-4">
              
              {/* Phone 1 (Main Feed Screen) */}
              <div className="w-[240px] sm:w-[260px] h-[480px] sm:h-[520px] bg-slate-900 rounded-[44px] p-3 shadow-2xl ring-1 ring-slate-800/40 relative z-10">
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden flex flex-col text-left">
                  {/* Status Bar */}
                  <div className="h-6 bg-slate-100 flex items-center justify-between px-6 text-[10px] font-bold text-slate-500">
                    <span>9:41</span>
                    <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto" />
                    <span>100%</span>
                  </div>

                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-black text-xs text-indigo-600">Meetra</span>
                        <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px]">📍</div>
                      </div>
                      <div className="bg-slate-50 rounded-xl px-2.5 py-1.5 text-[10px] text-slate-400 border border-slate-100 flex items-center gap-1 mb-3">
                        <Compass className="w-3 h-3 text-slate-400" />
                        <span>Where do you want to go?</span>
                      </div>

                      <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-2">Popular Nearby</div>
                      <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xs mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400" 
                          alt="Cafe" 
                          className="h-20 w-full object-cover"
                        />
                        <div className="p-2 bg-white">
                          <p className="text-[11px] font-bold text-slate-800">Tansen Cafe</p>
                          <p className="text-[9px] text-slate-500">★ 4.6 • ₹250-₹400 • 2.1 km</p>
                        </div>
                      </div>

                      <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Upcoming Outings</div>
                      <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-2 flex items-center gap-2">
                        <img 
                          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=100" 
                          alt="Fort" 
                          className="w-9 h-9 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-slate-900 truncate">Fort Sunset Trip</p>
                          <p className="text-[8px] text-indigo-600 font-medium">Sat, 14 Sep • 4:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="text-[9px] font-semibold text-slate-400">Same vibes, new people ♡</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Itinerary Card) */}
              <div className="hidden sm:block w-[220px] h-[450px] bg-slate-900 rounded-[40px] p-2.5 shadow-xl ring-1 ring-slate-800/40 translate-y-6">
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col p-3 text-left">
                  <div className="flex justify-between items-center text-[10px] font-bold text-slate-700 border-b border-slate-100 pb-2 mb-2">
                    <span>Your Itinerary</span>
                    <span className="text-indigo-600">Edit</span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px]">
                      <p className="font-bold text-slate-800">Stop 1: Cafe Stop</p>
                      <p className="text-[8px] text-slate-400">Tansen Cafe • ₹200</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px]">
                      <p className="font-bold text-slate-800">Stop 2: Fort Sunset</p>
                      <p className="text-[8px] text-slate-400">Sightseeing • ₹50</p>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-[10px]">
                      <p className="font-bold text-slate-800">Stop 3: Street Chaat</p>
                      <p className="text-[8px] text-slate-400">Dinner • ₹150</p>
                    </div>

                    <div className="p-2 rounded-xl bg-indigo-50 text-center mt-3">
                      <p className="text-[9px] text-indigo-600">Total Est. per person</p>
                      <p className="text-xs font-extrabold text-indigo-700">₹400</p>
                    </div>
                  </div>

                  <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg text-[9px] font-semibold">
                    View Details
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── Everything You Need (9 Feature Grid) ────────────────────── */}
      <section id="features" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need for the Perfect Outing
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2">
              From planning to payment, Meetra makes it simple, flexible and fun.
            </p>
          </div>

          {/* Grid: 3 columns x 3 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Create or Choose an Itinerary */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Create or Choose An Itinerary</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Build your own plan or pick from suggested itineraries. Set your time, budget and interests.
                </p>
              </div>
              <div className="mt-6 bg-white p-3.5 rounded-2xl border border-slate-200/70 text-xs space-y-1.5">
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>My Plan</span>
                  <span className="text-indigo-600 font-semibold">Suggested</span>
                </div>
                <p className="font-bold text-slate-800 text-[12px]">Fort View + Cafe Hangout</p>
                <p className="text-[10px] text-slate-400">Budget: ₹300 - ₹500 • Timing: 4:00 PM</p>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2">
                  <div className="w-3/4 h-full bg-indigo-600 rounded-full" />
                </div>
              </div>
            </div>

            {/* 2. Connect with People (or Go Solo) */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Connect with People (or Go Solo)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Match with like-minded travelers or go on your own. You're in control.
                </p>
              </div>
              <div className="mt-6 bg-white p-4 rounded-2xl border border-slate-200/70 text-center">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Match Found!
                </span>
                <div className="flex items-center justify-center -space-x-2 my-2.5">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" alt="User 1" />
                  <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-bold z-10">+</div>
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" alt="User 2" />
                </div>
                <p className="text-[11px] font-semibold text-slate-700">78% Match with Aarav</p>
              </div>
            </div>

            {/* 3. Smart Match Percentage */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <span className="font-black text-sm">%</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Match Percentage</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We show how well your preferences match with others — even if they don't match 100%.
                </p>
              </div>
              <div className="mt-6 bg-white p-3.5 rounded-2xl border border-slate-200/70 space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600 text-[11px]">Itinerary Match</span>
                  <span className="text-emerald-600">78%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[78%] h-full bg-emerald-500 rounded-full" />
                </div>
                <div className="flex gap-1.5 pt-1">
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">✓ Food</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">✓ Budget</span>
                  <span className="text-[9px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">✓ Timing</span>
                </div>
              </div>
            </div>

            {/* 4. Easy Ride Booking & Options */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Easy Ride Booking & Options</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Book a cab/auto (Rapido/Uber style), choose online or cash, or book an auto yourself — whatever works for you.
                </p>
              </div>
              <div className="mt-6 bg-white p-3 rounded-2xl border border-slate-200/70 space-y-2 text-[11px]">
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-slate-700">Rapido / Uber Transit</span>
                  <span className="text-indigo-600 font-bold">₹60</span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded-xl">
                  <span className="font-semibold text-slate-700">Cash or UPI to Driver</span>
                  <span className="text-slate-400">Direct</span>
                </div>
              </div>
            </div>

            {/* 5. Update & Cancel Anytime */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Update & Cancel Anytime</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Plans change, and that's okay. You can update the itinerary or cancel the ride anytime — no pressure.
                </p>
              </div>
              <div className="mt-6 bg-white p-3 rounded-2xl border border-slate-200/70 flex gap-2 text-center text-xs">
                <button className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-medium text-slate-700 text-[11px]">
                  Update Plan
                </button>
                <button className="flex-1 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-medium text-[11px]">
                  Cancel Ride
                </button>
              </div>
            </div>

            {/* 6. Split & See Updated Cost */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Split & See Updated Cost</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  If you merge with someone, the new cost is shown to both of you — clearly and instantly.
                </p>
              </div>
              <div className="mt-6 bg-white p-3.5 rounded-2xl border border-slate-200/70 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 line-through">Original: ₹600</p>
                  <p className="text-xs font-bold text-slate-800">After Collab (2 people)</p>
                </div>
                <div className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl font-black text-sm">
                  ₹300 each
                </div>
              </div>
            </div>

            {/* 7. Rate & Build Your Profile */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Rate & Build Your Profile</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Rate your travel partners. Your profile highlights ratings, completed collabs, and behavior tags.
                </p>
              </div>
              <div className="mt-6 bg-white p-3 rounded-2xl border border-slate-200/70 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Aarav M. <span className="text-amber-500">★ 4.8</span></p>
                  <p className="text-[10px] text-slate-400">12 collabs • Verified Student</p>
                </div>
              </div>
            </div>

            {/* 8. No Verification for Now */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Quick Sign Up</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sign up using just your mobile number and college email. No friction or complex verifications.
                </p>
              </div>
              <div className="mt-6 bg-white p-3 rounded-2xl border border-slate-200/70 space-y-1.5 text-xs">
                <input disabled placeholder="Mobile Number" className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px]" />
                <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg font-semibold text-[10px]">
                  Create Account
                </button>
              </div>
            </div>

            {/* 9. Just a Friendly Note */}
            <div className="bg-[#FBFBFE] rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Just a Friendly Note</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We're simply a matching platform. We don't take responsibility for issues or accidents. Travel responsibly!
                </p>
              </div>
              <div className="mt-6 bg-rose-50/70 border border-rose-100 p-3 rounded-2xl text-center">
                <p className="text-xs font-semibold text-rose-700">"We match people, not control journeys."</p>
                <p className="text-[10px] text-rose-500 mt-0.5">Stay safe & enjoy the trip ♡</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── Bottom CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-white to-[#EEF2FB] border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Ready for your next outing?
          </h3>
          <p className="text-sm text-slate-500">
            Download Meetra and meet like-minded college travel companions today.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => setDownloadModal(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-lg shadow-indigo-200 transition"
            >
              <span>Download Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────────────────── */}
      <footer className="bg-[#EEF2FB] border-t border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Compass className="w-4 h-4" />
            </div>
            <span className="font-black text-lg text-slate-900">Meetra</span>
            <span className="text-xs text-slate-400 ml-2">More people. More places. More stories.</span>
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Meetra Inc. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ─── Download Popup Modal ─────────────────────────────────────── */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white max-w-sm w-full rounded-3xl p-6 shadow-2xl relative text-center">
            <button 
              onClick={() => setDownloadModal(false)}
              className="absolute right-4 top-4 p-1.5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Smartphone className="w-6 h-6" />
            </div>

            <h4 className="text-lg font-bold text-slate-900">Meetra Mobile App</h4>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Android APK & Compose iOS build are currently in internal college beta!
            </p>

            <div className="space-y-2 text-xs font-semibold">
              <button 
                onClick={() => alert("APK download will be linked once Android team publishes build.")}
                className="w-full py-2.5 bg-indigo-600 text-white rounded-xl shadow-sm hover:bg-indigo-700"
              >
                Download Android APK (Beta)
              </button>
              <button 
                onClick={() => setDownloadModal(false)}
                className="w-full py-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}