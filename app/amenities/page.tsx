import Image from "next/image";
import { 
  Wifi, 
  Car, 
  Coffee, 
  Utensils, 
  Tv, 
  Wind, 
  Shield, 
  Zap, 
  Droplets, 
  Users,
  Book,
  Gamepad2,
  Shirt,
  Clock,
  Phone,
  MapPin
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property"
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Individual AC units in all rooms for your comfort"
  },
  {
    icon: Tv,
    title: "Entertainment",
    description: "LED TVs in common areas and premium rooms"
  },
  {
    icon: Coffee,
    title: "Tea/Coffee",
    description: "24/7 tea and coffee facilities in common areas"
  },
  {
    icon: Utensils,
    title: "Kitchen Facilities",
    description: "Fully equipped common kitchen for cooking"
  },
  {
    icon: Car,
    title: "Parking",
    description: "Secure parking space for bikes and cars"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance"
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply with backup generators"
  },
  {
    icon: Droplets,
    title: "Water Supply",
    description: "24/7 water supply with water purification system"
  },
  {
    icon: Users,
    title: "Common Areas",
    description: "Spacious common areas for socializing and relaxation"
  },
  {
    icon: Book,
    title: "Study Room",
    description: "Quiet study areas for focused learning"
  },
  {
    icon: Gamepad2,
    title: "Recreation",
    description: "Indoor games and recreational facilities"
  },
  {
    icon: Shirt,
    title: "Laundry",
    description: "Washing machine and drying facilities"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "No strict curfew with 24/7 access"
  },
  {
    icon: Phone,
    title: "Maintenance",
    description: "Quick response maintenance and housekeeping"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Easy access to metro, markets, and offices"
  }
];

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-amenities.jpg"
            alt="Jagmohan Homes Amenities"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Amenities</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Modern facilities and services designed for your comfort and convenience
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive amenities to ensure your stay is comfortable, convenient, and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="bg-[#c1b086] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#252e59] transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-800 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-1 bg-[#c1b086] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Why Choose Our Amenities?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#c1b086] rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>Quality First:</strong> All amenities are regularly maintained and upgraded to ensure optimal performance.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#c1b086] rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>24/7 Availability:</strong> Most facilities are available round the clock for your convenience.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#c1b086] rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>No Hidden Charges:</strong> All mentioned amenities are included in your monthly rent.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#c1b086] rounded-full mt-2"></div>
                  <p className="text-gray-600">
                    <strong>Regular Updates:</strong> We continuously add new facilities based on resident feedback.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/section1-2.jpg"
                alt="Amenities showcase"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#c1b086] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#252e59] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Experience Premium Living
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Book your room today and enjoy all these amazing amenities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rooms"
              className="bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300"
            >
              View Available Rooms
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}