"use client"
import { useState } from "react";

const rooms = [
  {
    id: 1,
    name: "Aval",
    description: "Sabse Acha briks a 1no. rating me iska use basically diwal aur roof bnane me hota hai.",
    price: "₹14,500 tali(2000bricks)",
    image: "/img.png",
  },
  {
    id: 2,
    name: "shem",
    description: "not best quality isko road bnane me aur boundery bnane me aur apka mn use kr sktey h.",
    price: "₹12,000(2000bricks)",
    image: "/Shem.jpg",
  },
  {
    id: 3,
    name: "meetha",
    description: "thora bekar jo use hota hai farsh bnane me.",
    price: "₹10,000(2000bricks)",
    image: "/meetha.jpg",
  },
];

export default function Briksdetails() {
  const [search, setSearch] = useState("");

  // Filter rooms by search term (case-insensitive)
  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative bg-[url('/brick.jpg')] bg-cover bg-center min-h-screen text-white">
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">BRICKS</h2>

        {/* Search input */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name..."
            className="px-4 py-2 w-full max-w-md rounded-l bg-white text-black"
          />
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {/* Brick Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div key={room.id} className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden">
                <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-semibold">{room.name}</h3>
                  <p className="text-gray-600">{room.description}</p>
                  <p className="text-blue-600 font-bold">{room.price}</p>
                  <div className="flex justify-between mt-4 ">
                    <a href="/counter" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                   ADD TO Card
                  </a>
                  <a href="/buy" className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    BUY NOW
                  </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-white text-xl">No bricks found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
