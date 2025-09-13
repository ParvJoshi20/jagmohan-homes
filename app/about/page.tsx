import Image from "next/image";
import { Heart, Shield, Users, Award, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Comfort First",
    description: "We prioritize your comfort with well-furnished rooms and homely atmosphere."
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "24/7 security and safe environment for all our residents."
  },
  {
    icon: Users,
    title: "Community Living",
    description: "Foster friendships and create lasting memories with fellow residents."
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "Exceptional service and maintenance to ensure your satisfaction."
  }
];

const timeline = [
  {
    year: "2015",
    title: "Foundation",
    description: "Started with a vision to provide quality accommodation for students and professionals."
  },
  {
    year: "2018",
    title: "Expansion",
    description: "Expanded to accommodate more residents with additional facilities and amenities."
  },
  {
    year: "2020",
    title: "Modernization",
    description: "Upgraded all facilities with modern amenities and technology integration."
  },
  {
    year: "2024",
    title: "Excellence",
    description: "Recognized as one of the premier PG accommodations in the region."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-about.jpg"
            alt="About Jagmohan Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Jagmohan Homes</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your home away from home, where comfort meets community
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-1 bg-[#c1b086] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Welcome to Our Story
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Jagmohan Homes has been a trusted name in providing quality accommodation for students and working professionals since 2015. We understand the importance of having a comfortable, safe, and affordable place to call home while you pursue your dreams.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commitment goes beyond just providing a room – we create a community where residents feel valued, supported, and at home. With modern amenities, excellent service, and a prime location, we strive to make your stay memorable and comfortable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located in the heart of Noida, we offer easy access to educational institutions, corporate offices, and essential amenities, making us the perfect choice for your accommodation needs.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/section1-1.jpg"
                alt="Jagmohan Homes interior"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#c1b086] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in accommodation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#c1b086] hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-[#c1b086] mb-2">{item.year}</div>
                      <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:block w-4 h-4 bg-[#c1b086] rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-1 bg-[#c1b086] mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in providing exceptional accommodation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-[#c1b086] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#252e59] transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#252e59] text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ready to Make Jagmohan Homes Your Home?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Discover our comfortable rooms and join our community of satisfied residents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/rooms"
              className="bg-[#c1b086] text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Our Rooms
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#252e59] transition-colors duration-300 inline-flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}