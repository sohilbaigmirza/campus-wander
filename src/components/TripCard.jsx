import React, { useState } from 'react';
import { MapPin, Clock, Users, IndianRupee, ChevronDown, ChevronUp, Check, Bus } from 'lucide-react';

export default function TripCard({ trip, currentUser, onJoin, isJoined }) {
  const [showDetails, setShowDetails] = useState(false);
  const seatsLeft = trip.maxSeats - trip.joinedUsers.length;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col">
      {/* Image Banner */}
      <div className="relative h-44 w-full">
        <img 
          src={trip.image} 
          alt={trip.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-slate-700 flex items-center gap-1 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-indigo-600" />
          {trip.distance} from campus
        </div>

        <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm flex items-center gap-0.5">
          <IndianRupee className="w-3.5 h-3.5" />
          <span>~{trip.totalExpense} total</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {trip.tags.map(t => (
              <span key={t} className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                #{t}
              </span>
            ))}
          </div>

          <h4 className="text-lg font-bold text-slate-900 line-clamp-1">{trip.title}</h4>
          
          <div className="mt-2 text-xs text-slate-500 flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {trip.time}
            </span>
            <span className="flex items-center gap-1">
              <Bus className="w-3.5 h-3.5 text-slate-400" />
              {trip.travelMode}
            </span>
          </div>

          {/* Collapsible Expense Breakdown */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="w-full flex items-center justify-between text-xs font-medium text-indigo-600 hover:text-indigo-700 mb-2"
            >
              <span>Estimated Expense Breakdown</span>
              {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {showDetails && (
              <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1.5 border border-slate-100 mb-3 animate-fade-in">
                <div className="flex justify-between text-slate-600">
                  <span>Commute / Transit</span>
                  <span className="font-semibold">₹{trip.breakdown.travel}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Entry / Tickets</span>
                  <span className="font-semibold">₹{trip.breakdown.entry}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Food / Snacks</span>
                  <span className="font-semibold">₹{trip.breakdown.food}</span>
                </div>
                <div className="border-t border-slate-200 pt-1 flex justify-between font-bold text-slate-800">
                  <span>Expected Total</span>
                  <span className="text-indigo-600">₹{trip.totalExpense}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer: Users & RSVP */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              {trip.joinedUsers.map((u, i) => (
                <img key={i} src={u.avatar} alt={u.name} className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" />
              ))}
            </div>
            <span className="text-xs font-medium text-slate-500">
              {seatsLeft > 0 ? `${seatsLeft} spot${seatsLeft > 1 ? 's' : ''} left` : 'Full'}
            </span>
          </div>

          <button
            disabled={seatsLeft === 0 && !isJoined}
            onClick={() => onJoin(trip.id)}
            className={`text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1 shadow-sm ${
              isJoined 
                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
                : seatsLeft === 0 
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {isJoined ? (
              <>
                <Check className="w-3.5 h-3.5" /> Joined
              </>
            ) : (
              'Join Group'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}