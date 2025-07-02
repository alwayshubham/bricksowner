const person = [
  {
    id: 1,
    name: "Ram Chandar Verma",
    position: "Main Malik",
    image: "/default.jpg", // Add correct image path if available
  },
  {
    id: 2,
    name: "Shubham Verma",
    position: "Bade Log",
    image: "/default.jpg", // Add correct image path if available
  },
];

export default function Person() {
  return (
    <section className="relative bg-[url('/brick.jpg')] bg-cover bg-center min-h-screen text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">OUR PEOPLE</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {person.map((persons) => (
            <div
              key={persons.id}
              className="bg-white text-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={persons.image}
                alt={persons.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{persons.name}</h3>
                <p className="text-blue-600 font-bold">{persons.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
