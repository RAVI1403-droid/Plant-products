import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PlantCard from "./components/PlantCard";
import SectionTitle from "./components/sectiontitle";
import TestimonialCard from "./components/TestimonialCard";
import Footer from "./components/Footer";

import plant1 from "./assets/plant1.png";
import user1 from "./assets/user1.jpg";

function App() {
  return (
    <div className="bg-[#10170d] min-h-screen text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Trending Plants Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <SectionTitle
          title="Trending Plants"
          subtitle="Discover our most loved indoor plants."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          <PlantCard
            image={plant1}
            title="Aglaonema Plant"
            description="Beautiful indoor decorative plant."
            price="599"
          />

          <PlantCard
            image={plant1}
            title="Snake Plant"
            description="Air purifying modern plant."
            price="799"
          />

          <PlantCard
            image={plant1}
            title="Aloe Vera"
            description="Low maintenance healthy plant."
            price="499"
          />

        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <SectionTitle
          title="Customer Reviews"
          subtitle="What our customers say about us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          <TestimonialCard
            avatar={user1}
            name="Sunil"
            review="Amazing quality plants and fast delivery."
            rating={5}
          />

          <TestimonialCard
            avatar={user1}
            name="Ravi"
            review="Beautiful packaging and healthy plants."
            rating={4}
          />

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;