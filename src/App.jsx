import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';
import AuthModal from './components/AuthModal';
import CreateTripModal from './components/CreateTripModal';
import { INITIAL_TRIPS, CATEGORIES } from './data/mockData';
import { Search, Sparkles } from 'lucide-react';

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    name: "Kabir Verma",
    email: "freshman@college.edu",
    branch: "CSE '28",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
  });

  const [trips, setTrips] = useState(INITIAL_TRIPS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [joinedTripIds, setJoinedTripIds] = useState([1]);

  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Filter Logic
  const filteredTrips = trips.filter(trip => {
    const matchesCategory = 
      selectedCategory === "All" ||
      (selectedCategory === "Under ₹200" ? trip.totalExpense <= 200 : trip.category === selectedCategory);

    const matchesSearch = 
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleJoinTrip = (id) => {
    if (!currentUser) {
      setIsAuthOpen(true);
      return;
    }

    if (joinedTripIds.includes(id)) {
      setJoinedTripIds(joinedTripIds.filter(tId => tId !== id));
      setTrips(trips.map(trip => {
        if (trip.id === id) {
          return {
            ...trip,
            joinedUsers: trip.joinedUsers.filter(u => u.name !== currentUser.name)
          };
        }
        return trip;
      }));
    } else {
      setJoinedTripIds([...joinedTripIds, id]);
      setTrips(trips.map(trip => {
        if (trip.id === id) {
          return {
            ...trip,
            joinedUsers: [...trip.joinedUsers, { name: currentUser.name, avatar: currentUser.avatar }]
          };
        }
        return trip;
      }));
    }
  };

  const handleAddTrip = (newTrip) => {
    setTrips([newTrip, ...trips]);
    setJoinedTripIds([...joinedTripIds, newTrip.id]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <Navbar 
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenCreateTrip={() => setIsCreateOpen(true)}
        onLogout={() => setCurrentUser(null)}
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Built for College Freshers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore your new city with peers on your budget
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Discover places, join hangouts with students sharing common interests, and see full commute and expense breakdowns.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input 
              type="text"
              placeholder="Search spots, interests (e.g. Photography, Chai, Heritage)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none mb-6">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trips Grid */}
        {filteredTrips.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">No plans matching this criteria yet.</p>
            <button 
              onClick={() => setIsCreateOpen(true)}
              className="mt-3 text-xs font-semibold text-indigo-600 underline"
            >
              Start one yourself!
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map(trip => (
              <TripCard 
                key={trip.id} 
                trip={trip} 
                currentUser={currentUser}
                onJoin={handleJoinTrip}
                isJoined={joinedTripIds.includes(trip.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Modals */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLoginSuccess={(user) => setCurrentUser(user)}
      />

      <CreateTripModal 
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onAddTrip={handleAddTrip}
        currentUser={currentUser || { name: 'Anonymous', branch: 'Freshman', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100' }}
      />
    </div>
  );
}