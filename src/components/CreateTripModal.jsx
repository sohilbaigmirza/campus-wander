import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CreateTripModal({ isOpen, onClose, onAddTrip, currentUser }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Cafes',
    distance: '3 km',
    travelMode: 'Metro',
    time: 'Saturday 4:00 PM',
    travel: 40,
    entry: 0,
    food: 150,
    maxSeats: 4,
    tags: 'Cafe, Casual'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const travel = Number(formData.travel) || 0;
    const entry = Number(formData.entry) || 0;
    const food = Number(formData.food) || 0;

    const newTrip = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      distance: formData.distance,
      travelMode: formData.travelMode,
      time: formData.time,
      totalExpense: travel + entry + food,
      breakdown: { travel, entry, food },
      tags: formData.tags.split(',').map(t => t.trim()),
      host: { name: currentUser.name, branch: currentUser.branch },
      joinedUsers: [
        { name: currentUser.name, avatar: currentUser.avatar }
      ],
      maxSeats: Number(formData.maxSeats)
    };

    onAddTrip(newTrip);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-slate-900 mb-1">Create Hangout Plan</h3>
        <p className="text-xs text-slate-500 mb-5">Invite other college students to explore with you</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Spot / Plan Title</label>
            <input 
              required
              placeholder="e.g. Vintage Book Market & Coffee"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Cafes">Cafes</option>
                <option value="Food & Heritage">Food & Heritage</option>
                <option value="Outdoors">Outdoors</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Max Group Size</label>
              <input 
                type="number"
                min="2"
                max="10"
                value={formData.maxSeats}
                onChange={(e) => setFormData({...formData, maxSeats: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Distance</label>
              <input 
                placeholder="e.g. 4 km"
                value={formData.distance}
                onChange={(e) => setFormData({...formData, distance: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">When?</label>
              <input 
                placeholder="e.g. Sat, 5 PM"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
              />
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Estimated Cost per Person (₹)</span>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <span className="text-[10px] text-slate-500 font-medium">Travel</span>
                <input 
                  type="number"
                  value={formData.travel}
                  onChange={(e) => setFormData({...formData, travel: e.target.value})}
                  className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-medium">Entry/Pass</span>
                <input 
                  type="number"
                  value={formData.entry}
                  onChange={(e) => setFormData({...formData, entry: e.target.value})}
                  className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-medium">Food</span>
                <input 
                  type="number"
                  value={formData.food}
                  onChange={(e) => setFormData({...formData, food: e.target.value})}
                  className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Tags (Comma-separated)</label>
            <input 
              placeholder="Budget, Sunset, Board Games"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-sm transition mt-3"
          >
            Publish Plan
          </button>
        </form>
      </div>
    </div>
  );
}