import React, { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Kabir Verma',
    email: 'freshman@college.edu',
    branch: 'CSE (1st Year)'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: formData.name,
      email: formData.email,
      branch: formData.branch,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl relative border border-slate-100">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-2.5 bg-indigo-50 text-indigo-600 rounded-xl mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            {isSignUp ? "Join CampusWander" : "Welcome Back"}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Connect with college peers & explore your city
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">College Email (.edu)</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Branch / Batch</label>
            <input 
              type="text" 
              value={formData.branch}
              onChange={(e) => setFormData({...formData, branch: e.target.value})}
              placeholder="e.g. CSE (1st Year)"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm transition mt-2 shadow-lg shadow-indigo-100"
          >
            {isSignUp ? "Create Profile" : "Continue to Explore"}
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-5">
          {isSignUp ? "Already have an account?" : "New to campus?"}{" "}
          <button 
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-600 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
}