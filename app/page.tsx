import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import Section1 from "./components/introduction";
import Section2 from "./components/amenities";
import Section3 from "./components/rooms";
import Section4 from "./components/reviews";
import Section5 from "./components/gallery";
import Section6 from "./components/location";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <section className="py-8 md:py-12 lg:py-16">
          <Section1 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section2 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section3 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section4 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section5 />
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <Section6 />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
