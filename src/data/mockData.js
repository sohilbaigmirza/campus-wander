export const INITIAL_TRIPS = [
  {
    id: 1,
    title: "Sunset & Street Food at Fort View",
    category: "Food & Heritage",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    distance: "3.5 km",
    travelMode: "Shared Auto / E-Rickshaw",
    time: "Saturday, 5:00 PM",
    totalExpense: 230,
    breakdown: { travel: 50, entry: 30, food: 150 },
    tags: ["Photography", "Street Food", "Budget"],
    host: { name: "Aarav Sharma", branch: "CSE '28" },
    joinedUsers: [
      { name: "Sneha P.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
      { name: "Karan V.", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" }
    ],
    maxSeats: 5
  },
  {
    id: 2,
    title: "Board Games & Iced Lattes at Roastery",
    category: "Cafes",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    distance: "2.1 km",
    travelMode: "Walking / Cycle",
    time: "Sunday, 4:00 PM",
    totalExpense: 320,
    breakdown: { travel: 0, entry: 0, food: 320 },
    tags: ["Board Games", "Chill", "Coffee"],
    host: { name: "Riya Sen", branch: "ECE '28" },
    joinedUsers: [
      { name: "Dev K.", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100" }
    ],
    maxSeats: 4
  },
  {
    id: 3,
    title: "Eco Park Morning Trek & Chai",
    category: "Outdoors",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    distance: "6.0 km",
    travelMode: "Metro + Bus",
    time: "Sunday, 6:30 AM",
    totalExpense: 140,
    breakdown: { travel: 60, entry: 30, food: 50 },
    tags: ["Trekking", "Nature", "Early Birds"],
    host: { name: "Vikram Mehta", branch: "Mech '27" },
    joinedUsers: [
      { name: "Neha J.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100" },
      { name: "Aditya C.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
      { name: "Pooja R.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" }
    ],
    maxSeats: 6
  }
];

export const CATEGORIES = ["All", "Food & Heritage", "Cafes", "Outdoors", "Under ₹200"];