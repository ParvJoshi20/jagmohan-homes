import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-accessibility.jpg"
            alt="Contact Jagmohan Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Get in touch with us for inquiries, bookings, or any assistance
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="w-20 h-1 bg-[#c1b086] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b086] focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b086] focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b086] focus:border-transparent transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b086] focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="room-inquiry">Room Inquiry</option>
                      <option value="booking">Booking</option>
                      <option value="complaint">Complaint</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c1b086] focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c1b086] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#252e59] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="w-20 h-1 bg-[#c1b086] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help you with any questions or concerns you may have.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#c1b086] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Raipur Khadar, Sector 126,<br />
                      Noida, Uttar Pradesh 201313
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#c1b086] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      +91 8285423005<br />
                      +91 7011346403
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#c1b086] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@jagmohanhomes.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#c1b086] p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: 10:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#c1b086] p-3 rounded-lg hover:bg-[#252e59] transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#c1b086] p-3 rounded-lg hover:bg-[#252e59] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#c1b086] p-3 rounded-lg hover:bg-[#252e59] transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
              Find Us Here
            </h2>
            <p className="text-gray-600">
              Located in the heart of Noida with easy access to major landmarks
            </p>
          </div>
          
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9288581602113!2d77.33335351137016!3d28.541857988090676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce67f71bf3d4b%3A0x8ced6e0664884ce!2sJagmohan%20Pg!5e0!3m2!1sen!2sin!4v1743600091484!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}