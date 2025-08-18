import Image from "next/image";
import { Wifi, Car, Coffee, Utensils, Tv, Wind, Users, Bed } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Deluxe Single Room",
    rent: 8000,
    image: "/hero-rooms.jpg",
    gallery: ["/hero-rooms.jpg", "/section1-1.jpg", "/section1-2.jpg"],
    description: "Perfect for solo travelers, featuring modern amenities and comfortable living space.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "LED TV" },
      { icon: Coffee, label: "Tea/Coffee" },
    ],
    maxGuests: 1,
    bedType: "Single Bed"
  },
  {
    id: 2,
    name: "Premium Double Room",
    rent: 12000,
    image: "/section1-1.jpg",
    gallery: ["/section1-1.jpg", "/hero-rooms.jpg", "/section1-2.jpg"],
    description: "Spacious double occupancy room with premium furnishing and city view.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "LED TV" },
      { icon: Coffee, label: "Tea/Coffee" },
      { icon: Utensils, label: "Mini Fridge" },
    ],
    maxGuests: 2,
    bedType: "Double Bed"
  },
  {
    id: 3,
    name: "Family Suite",
    rent: 18000,
    image: "/section1-2.jpg",
    gallery: ["/section1-2.jpg", "/hero-rooms.jpg", "/section1-1.jpg"],
    description: "Ideal for families, featuring separate living area and multiple beds.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "LED TV" },
      { icon: Coffee, label: "Tea/Coffee" },
      { icon: Utensils, label: "Mini Fridge" },
      { icon: Car, label: "Parking" },
    ],
    maxGuests: 4,
    bedType: "Multiple Beds"
  },
  {
    id: 4,
    name: "Executive Room",
    rent: 15000,
    image: "/hero-about.jpg",
    gallery: ["/hero-about.jpg", "/section1-1.jpg", "/section1-2.jpg"],
    description: "Business-friendly room with work desk and premium amenities.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "LED TV" },
      { icon: Coffee, label: "Tea/Coffee" },
      { icon: Utensils, label: "Mini Fridge" },
    ],
    maxGuests: 2,
    bedType: "Queen Bed"
  },
  {
    id: 5,
    name: "Budget Room",
    rent: 6000,
    image: "/hero-amenities.jpg",
    gallery: ["/hero-amenities.jpg", "/section1-1.jpg", "/section1-2.jpg"],
    description: "Affordable accommodation without compromising on basic comforts.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "Fan" },
      { icon: Coffee, label: "Tea/Coffee" },
    ],
    maxGuests: 1,
    bedType: "Single Bed"
  },
  {
    id: 6,
    name: "Luxury Suite",
    rent: 25000,
    image: "/hero-accessibility.jpg",
    gallery: ["/hero-accessibility.jpg", "/section1-1.jpg", "/section1-2.jpg"],
    description: "Premium suite with separate living room, balcony, and luxury amenities.",
    amenities: [
      { icon: Wifi, label: "Free WiFi" },
      { icon: Wind, label: "AC" },
      { icon: Tv, label: "Smart TV" },
      { icon: Coffee, label: "Tea/Coffee" },
      { icon: Utensils, label: "Mini Fridge" },
      { icon: Car, label: "Parking" },
    ],
    maxGuests: 3,
    bedType: "King Bed"
  },
];

export default function RoomsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-rooms.jpg"
            alt="Luxury rooms at Jagmohan Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Rooms</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover comfort and luxury in our thoughtfully designed accommodations
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Choose Your Perfect Room
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each room is designed with your comfort in mind, featuring modern amenities and thoughtful touches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-[#c1b086] text-white px-3 py-1 rounded-full text-sm font-medium">
                    ₹{room.rent.toLocaleString()}/month
                  </div>
                </div>

                {/* Room Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-serif font-bold text-gray-800">
                      {room.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-1" />
                      {room.maxGuests}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Bed className="w-4 h-4 mr-2" />
                    {room.bedType}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-800 mb-3">Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <amenity.icon className="w-4 h-4 mr-2 text-[#c1b086]" />
                          {amenity.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-[#c1b086] text-white py-3 rounded-lg font-medium hover:bg-[#252e59] transition-colors duration-300">
                    Check Availability
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#252e59] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Book Your Stay?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us directly for personalized assistance and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300">
              Call Now: +91 8285423005
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}