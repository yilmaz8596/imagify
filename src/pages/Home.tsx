import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1]">
      <Header />
      <Hero />
      <HowItWorks />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}
