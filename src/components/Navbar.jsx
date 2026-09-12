import React from 'react';
import { Compass, PlusCircle, User, LogOut } from 'lucide-react';

export default function Navbar({ currentUser, onOpenAuth, onOpenCreateTrip, onLogout }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-md shadow-indigo-100">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900">CampusWander</span>
            <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
              Freshers Edition
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <>
              <button 
                onClick={onOpenCreateTrip}
                className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl shadow-sm transition"
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Create Hangout</span>
              </button>

              <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
                <div className="text-right hidden md:block leading-tight">
                  <p className="text-sm font-semibold text-slate-800">{currentUser.name}</p>
                  <p className="text-xs text-slate-500">{currentUser.branch}</p>
                </div>
                <button 
                  onClick={onLogout}
                  title="Logout"
                  className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition"
            >
              <User className="w-4 h-4" />
              <span>Sign In / Join</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}